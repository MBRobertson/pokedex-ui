import React, { useState, useCallback, useEffect } from "react";
import { SITE_TITLE } from "../config";

type AsyncFunction<A extends never[], O> = (...args: A) => Promise<O>

/**
 * High order function to take any async function, and automatically wraps it in a useEffect
 * @param func An async function
 * @returns The result of the async function as functional state, as well as indicators for loading and errors
 */
export const wrapAsync = <P extends never[], R, T extends AsyncFunction<P, R>>(func: T) => {
  return (...args: Parameters<T>) => {
    const [value, setValue] = useState<Awaited<ReturnType<T>>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetch = useCallback(async () => {
      setLoading(true);
      setError(false);
      try {
        setValue(await func(...args) as Awaited<ReturnType<T>>);
      } catch {
        setError(true);
      }
      setLoading(false);
    }, args);

    useEffect(() => {
      fetch();
    }, [fetch]);

    return [value, loading, error, fetch] as const
  }
}

/**
 * Simple state store for use in a text input field
 * @param initialValue Optional initial value for the input
 * @returns Props to be applied to an input
 */
export const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setValue(e.target.value);
  }, [])

  return { value, onChange };
}

/**
 * Overwrite the document title
 * @param title
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    const lastTitle = document.title;
    document.title = `${title} - ${SITE_TITLE}`;
    return () => { document.title = lastTitle }
  }, [title]);
}