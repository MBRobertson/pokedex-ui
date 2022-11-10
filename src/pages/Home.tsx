import { useAllPokemon } from "../api";
import { Container } from "../components/layout/Container";
import { PokemonListItem } from "../components/PokemonListItem";

export const Home: React.FC = () => {
  const [pokemon, loading, error, retry] = useAllPokemon();
  const ready = !loading && pokemon;

  // If the API returned an error, prompt the user to retry
  if (error) return <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
    <h1 className="text-3xl font-bold text-zinc-200">Failed to load Pokemon</h1>
    <button 
      className="py-2 px-6 rounded-xl text-lg text-white font-bold transition-colors bg-rose-500 hover:bg-rose-400 active:bg-rose-600"
      onClick={retry}>
      Retry
    </button>
  </div>

  return <Container>
    <div className="flex flex-col p-8 gap-4">
      <h1 className="text-5xl font-bold text-rose-400">My Pokedex</h1>
      {
        !ready 
          ? <span className="text-2xl font-bold text-zinc-200">Loading...</span>
          : <ul className="flex flex-wrap gap-2">
              {pokemon.map(p => <PokemonListItem key={p.name} name={p.name} />)}
            </ul>
      }
    </div>
  </Container>;
}
