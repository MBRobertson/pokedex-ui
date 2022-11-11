import axios from "axios";
import { API_ROOT } from "../config";
import { wrapAsync } from "../utils/hooks";
import { Link, Page, Pokemon } from "./types";

const DEFAULT_LIMIT = 150;

/**
 * Fetch a list of all pokemon name, up to a limit
 * @param limit How many names to fetch, defaults to DEFAULT_LIMIT (150)
 * @returns List of Link values of pokemon
 */
export const getAllPokemon = async (limit?: number) => {
  if (!limit) limit = DEFAULT_LIMIT;

  const response = await axios.get<Page<Link>>(`${API_ROOT}/pokemon?limit=${limit}`);

  // Sort pokename names alphabetically
  response.data.results.sort((a, b) => a.name.localeCompare(b.name));

  return response.data.results;
}

export const useAllPokemon = wrapAsync(getAllPokemon);

/**
 * Fetch detailed information of a specific pokemon
 * @param key Pokemon name or id
 * @returns Detailed pokemon information
 */
export const getPokemon = async (key: string | number) => {
  const response = await axios.get<Pokemon>(`${API_ROOT}/pokemon/${key}`);
  return response.data; 
}

export const usePokemon = wrapAsync(getPokemon);