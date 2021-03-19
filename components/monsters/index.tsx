import Monster from "./Monster";

interface IMonstersProps {
  monsters: IMonster[];
}

export default function Monsters({ monsters: [left, right] }: IMonstersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-lg md:mx-auto">
      <Monster monster={left} />
      <Monster monster={right} />
    </div>
  );
}
