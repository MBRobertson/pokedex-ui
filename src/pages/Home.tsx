import { useMemo } from "react";
import { useAllPokemon } from "../api";
import { Container } from "../components/layout/Container";
import { PokemonListItem } from "../components/PokemonListItem";
import { useInput, useTitle } from "../utils/hooks";

export const Home: React.FC = () => {
  useTitle('My Pokedex');

  const [pokemon, loading, error, retry] = useAllPokemon();
  const ready = !loading && pokemon;

  const filter = useInput();

  // If the API returned an error, prompt the user to retry
  if (error) return <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
    <h1 className="text-3xl font-bold text-zinc-200">Failed to load Pokemon</h1>
    <button 
      className="py-2 px-6 rounded-xl text-lg text-white font-bold transition-colors bg-rose-500 hover:bg-rose-400 active:bg-rose-600"
      onClick={retry}>
      Retry
    </button>
  </div>

  const filteredPokemon = useMemo(() => {
    const filterText = filter.value;
    if (!pokemon || !filterText) return pokemon;

    return pokemon.filter(p => p.name.toLocaleLowerCase().indexOf(filterText) !== -1)
  }, [pokemon, filter.value]);

  return <Container>
    <div className="flex flex-col p-8 gap-4">
      <h1 className="text-5xl font-bold text-rose-500 drop-shadow-lg">My Pokedex</h1>
      <input 
        {...filter}
        className="px-4 py-2 text-lg bg-zinc-800 text-zinc-300 rounded-lg outline-none focus:outline-rose-500 focus:outline-2 focus:outline-offset-2"
        placeholder="Filter Pokemon..." />
      {
        !ready 
          ? <span className="text-2xl font-bold text-zinc-200">Loading...</span>
          : filteredPokemon?.length === 0
            ? <span className="text-xl font-bold text-rose-200">No Pokemon match filter</span>
            : <ul className="flex flex-wrap gap-2">
                {filteredPokemon?.map(p => <PokemonListItem key={p.name} name={p.name} />)}
              </ul>
      }
    </div>
  </Container>;
}
