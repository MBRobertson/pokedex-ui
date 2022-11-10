import axios from "axios";
import { Link, Page, Pokemon } from "./types";
import { wrapAsync } from "./utils";

const API_ROOT = 'https://pokeapi.co/api/v2';
const DEFAULT_LIMIT = 150;

export const getAllPokemon = async (limit?: number) => {
  if (!limit) limit = DEFAULT_LIMIT;

  const response = await axios.get<Page<Pick<Pokemon, 'name'> & Link>>(`${API_ROOT}/pokemon?limit=${limit}`);

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