import { useEffect, useState } from "react";

import { fetchMonster, pickTwo } from "@/util/data";
import Monster from "./Monster";

interface IMonstersProps {
  monsters: IMonster[];
  vs?: string[];
}

export default function Monsters({ monsters, vs }: IMonstersProps) {
  const [[left, right], setMonsters] = useState<IMonster[]>([null, null]);
  // On mount, we fetch two random monsters or use our vs
  useEffect(() => {
    (async () => {
      if (vs) {
        setMonsters(await Promise.all(vs.map((index) => fetchMonster(index))));
      } else {
        setMonsters(await pickTwo(monsters));
      }
    })();
  }, [vs]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-lg md:mx-auto">
      <Monster {...left} />
      <Monster {...right} />
    </div>
  );
}
