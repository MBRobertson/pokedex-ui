import axios from "axios";
import { API_ROOT } from "../config";
import { wrapAsync } from "../utils/hooks";
import { Link, Page, Pokemon } from "./types";

const DEFAULT_LIMIT = 150;

export const getAllPokemon = async (limit?: number) => {
  if (!limit) limit = DEFAULT_LIMIT;

  const response = await axios.get<Page<Link>>(`${API_ROOT}/pokemon?limit=${limit}`);

  // Sort pokename names alphabetically
  response.data.results.sort((a, b) => a.name.localeCompare(b.name));

  return response.data.results;
}

export const useAllPokemon = wrapAsync(getAllPokemon);

export const getPokemon = async (key: string | number) => {
  const response = await axios.get<Pokemon>(`${API_ROOT}/pokemon/${key}`);
  return response.data; 
}

export const usePokemon = wrapAsync(getPokemon);