import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

export interface PokemonListItemProps {
  name: string;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ name }) => {
  return (
    <Link 
      className="text-rose-200 text-lg capitalize border-rose-400 border-[2px] py-1 px-4 rounded-xl cursor-pointer transition-colors hover:bg-rose-400 hover:text-zinc-900"
      to={`/pokemon/${name}`}>
      { name }
    </Link>
  )
}