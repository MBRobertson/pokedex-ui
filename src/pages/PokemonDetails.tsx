import { useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../api";
import { Container } from "../components/layout/Container";
import { useTitle } from "../utils/hooks";
import { capitalize } from "../utils/text";

export const PokemonDetails: React.FC = () => {
  const { pokemon } = useParams();
  const [pokemonData, loading, error] = usePokemon(pokemon ?? '');

  const title = capitalize(pokemonData?.name ?? pokemon ?? 'Unkown')
  useTitle(title);

  return <Container>
    <div className="flex flex-col p-8 gap-4">
      <h1 className="text-5xl font-bold text-rose-500 drop-shadow-lg">{title}</h1>
    </div>
  </Container>;
}