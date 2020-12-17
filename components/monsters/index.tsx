import { useEffect, useState } from "react";

import { pickTwo } from "@/util/data";
import Monster from "./Monster";

interface IMonstersProps {
  monsters: IMonster[];
}

type MonsterTuple = [IMonster, IMonster];

export default function Monsters({ monsters }: IMonstersProps) {
  const [[left, right], setMonsters] = useState<MonsterTuple>([null, null]);

  // On mount, we fetch two random monsters
  useEffect(() => {
    (async () => setMonsters(await pickTwo(monsters)))();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid- gap-4 max-w-screen-md md:mx-auto">
      <Monster {...left} />
      <Monster {...right} />
    </div>
  );
}
