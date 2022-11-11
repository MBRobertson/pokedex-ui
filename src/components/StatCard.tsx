export interface StatCardProps {
  title: string;
  items: string[];
}

export const StatCard: React.FC<StatCardProps> = ({ title, items }) => {
  return <div className="flex flex-col border-2 border-rose-500 rounded-xl overflow-x-hidden drop-shadow-lg w-full max-h-[300px]">
    <h2 className="bg-rose-500 py-2 px-3 font-bold text-lg text-white">
      {title}
    </h2>
    <div className="bg-zinc-800 py-2 px-4 flex flex-col flex-1 overflow-y-auto">
      {items.map((item, i) => <span key={i} className="capitalize">
        {item}
      </span>)}
    </div>
  </div>
}