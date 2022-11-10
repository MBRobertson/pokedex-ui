export interface Page<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Many API values are partial types with a link pointing to the full result
export interface Link {
  url: string;
}

export interface Type {
  name: string;
  // Only typing the properties we are interested in
}

export interface Pokemon {
  id: number;
  name: string;
  types: { slot: number, type: Pick<Type, 'name'> & Link }[];
  // Only typing the properties we are interested in
}