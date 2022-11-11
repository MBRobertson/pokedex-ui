import { Link } from "react-router-dom";

export interface PokemonListItemProps {
  name: string;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ name }) => {
  return (
    <Link 
      className="text-lg capitalize border-2 py-1 px-4 rounded-xl cursor-pointer transition-colors text-rose-200 border-rose-400 hover:bg-rose-400 hover:text-zinc-900 active:bg-rose-600 active:border-rose-600"
      to={`/pokemon/${name}`}>
      { name }
    </Link>
  )
}