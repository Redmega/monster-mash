import { toFraction } from "@/util/format";

export default function Monster(monster: IMonster) {
  return (
    <article className="flex-1 rounded shadow-md p-2 m-2 bg-yellow-100">
      <header className="flex justify-between mb-2 border-b border-yellow-300 w-full shadow-sm">
        <h2 className="text-2xl font-serif">{monster?.name ?? "Loading..."}</h2>
        {monster.index && (
          <div className="flex flex-col justify-items-center text-right font-mono text-xs text-gray-700 font-semibold mb-1">
            <span>CR {toFraction(monster.challenge_rating)}</span>
            <span>{monster.xp} XP</span>
          </div>
        )}
      </header>
      {monster.index && <p>TODO: Rest of monster info</p>}
      {!monster.index && <p>Loading...</p>}
    </article>
  );
}
