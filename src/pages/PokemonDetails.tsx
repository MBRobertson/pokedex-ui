import { Link, useParams } from "react-router-dom";
import { usePokemon } from "../api";
import { Container } from "../components/Container";
import { StatCard } from "../components/StatCard";
import { useTitle } from "../utils/hooks";
import { capitalize } from "../utils/text";

const HomeLink = () => 
  <Link 
    className="py-1 px-4 rounded-xl text-md text-rose-200 font-bold transition-colors border-2 border-rose-400 hover:bg-rose-400 hover:text-zinc-900 active:bg-rose-600 active:border-rose-600"
    to="/">
      My Pokedex
  </Link>

export const PokemonDetails: React.FC = () => {
  const { pokemon } = useParams();
  const [pokemonData, loading, error] = usePokemon(pokemon ?? '');
  const ready = !loading && !error && pokemonData;

  const title = capitalize(pokemonData?.name ?? pokemon ?? 'Unkown')
  useTitle(title);

  if (error) return <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
    <h1 className="text-3xl font-bold text-zinc-200">Unable to find pokemon {title}</h1>
    <HomeLink/>
  </div>

  return <Container>
    <div className="flex flex-col p-8 gap-6">
      <div className="flex flex-row gap-6 items-end flex-wrap">
        <h1 className="text-5xl font-bold text-rose-500 drop-shadow-lg">{title}</h1>
        <HomeLink/>
      </div>
      {
        !ready 
          ? <span className="text-2xl font-bold text-zinc-200">Loading...</span>
          : <div className="flex flex-row flex-wrap gap-2 justify-center">
              <div className="flex flex-col gap-2 min-w-[350px]">
                <StatCard title="Stats" items={pokemonData.stats.map(value => `${value.stat.name}: ${value.base_stat} (${value.effort} EV)`)} />
                <StatCard title="Types" items={pokemonData.types.map(value => value.type.name)} />
              </div>
              <div className="flex flex-col gap-2 min-w-[350px]">
                <StatCard title="Abilities" items={pokemonData.abilities.map(value => value.ability.name)} />
                <StatCard title="Moves" items={pokemonData.moves.map(value => value.move.name)} />
              </div>
              <div className="flex flex-col gap-2 min-w-[350px]">
                <StatCard title="Appears In" items={pokemonData.game_indices.map(value => value.version.name)} />
              </div>
            </div>
      }
    </div>
  </Container>;
}