export interface PokemonListItemProps {
  name: string;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ name }) => (
  <li className="text-rose-200 text-lg capitalize border-rose-400 border-[2px] py-1 px-4 rounded-xl cursor-pointer transition-colors hover:bg-rose-400 hover:text-zinc-900">
    { name }
  </li>
)