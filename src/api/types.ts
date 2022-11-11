export interface Page<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Many API values are partial types with a link pointing to the full result
export interface Link {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: { slot: number, type: Link }[];
  abilities: { slot: number, is_hidden: boolean, ability: Link }[];
  forms: Link[];
  game_indices: { game_index: number, version: Link }[];
  moves: { move: Link }[];
  stats: { base_stat: number, effort: number, stat: Link }[];
  // Only typing the properties we are interested in
}