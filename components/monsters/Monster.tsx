import { ReactNode } from "react";
import clsx from "clsx";

import { toFraction } from "@/util/format";
import Attribute from "./Attribute";

export default function Monster(monster: IMonster) {
  const loaded = !!monster.index;
  console.log(monster);
  return (
    <article className="w-full rounded shadow-md p-2 bg-yellow-100">
      <header className="flex justify-between mb-2 border-b border-yellow-300 w-full shadow-sm">
        <div className="flex flex-col">
          <h2 className="text-2xl font-serif">{monster?.name ?? "Loading..."}</h2>
          {loaded && (
            <small className="text-gray-800 text-sm">
              {monster.size} {monster.type} {monster.subtype && `(${monster.subtype})`},{" "}
              {monster.alignment}
            </small>
          )}
        </div>

        {loaded && (
          <div className="flex flex-col justify-items-center text-right font-mono text-xs text-gray-700 font-semibold mb-1">
            <span>CR {toFraction(monster.challenge_rating)}</span>
            <span>{monster.xp} XP</span>
          </div>
        )}
      </header>
      {loaded && (
        <div>
          <Section title="Combat">
            <p className="m-1">
              <span className="font-bold">Armor Class: </span>
              {monster.armor_class}
            </p>
            <p className="m-1">
              <span className="font-bold">HP: </span>
              {monster.hit_points}
            </p>
            <p className="m-1">
              ​<span className="font-bold">Saving Throws: </span>
              <span>TODO</span>
            </p>
            <p className="m-1">
              ​<span className="font-bold">Damage Immunities: </span>
              <span>TODO</span>
            </p>
            <p className="m-1">
              ​<span className="font-bold">Damage Resistances: </span>
              <span>TODO</span>
            </p>
            <p className="m-1">
              ​<span className="font-bold">Damage Vulnerabilities: </span>
              <span>TODO</span>
            </p>
            <p className="m-1">
              ​<span className="font-bold">Condition Immunities: </span>
              <span>TODO</span>
            </p>
            <p className="m-1">
              ​<span className="font-bold">Proficiencies: </span>
              <span>
                {monster.proficiencies.map(({ value, proficiency: { name } }) => (
                  <Pill>{`${name.replace(/Skill: /, " ")} ${value > 0 ? "+" : ""}${value}`}</Pill>
                ))}
              </span>
            </p>
            <p className="m-1">
              <span className="font-bold">Senses: </span>
              {Object.entries(monster.senses || {}).map(([type, value]) => (
                <Pill>{`${type.replace(/_/, " ")} ${value}`}</Pill>
              ))}
            </p>
          </Section>
          <Section title="Speed">
            {Object.entries(monster.speed || {}).map(([type, speed]) => (
              <Attribute key={type} title={type} value={speed} />
            ))}
          </Section>
          <Section title="Stats">
            <div className="grid grid-cols-3 md:grid-cols-6">
              <Attribute title="STR" value={monster.strength} />
              <Attribute title="DEX" value={monster.dexterity} />
              <Attribute title="CON" value={monster.constitution} />
              <Attribute title="INT" value={monster.intelligence} />
              <Attribute title="WIS" value={monster.wisdom} />
              <Attribute title="CHA" value={monster.charisma} />
            </div>
          </Section>
          <Section title="Abilities">{/* special_abilities */}TODO</Section>
          <Section title="Actions">TODO</Section>
          <Section title="Legendary Actions">TODO</Section>
        </div>
      )}
      {!loaded && <p>Loading...</p>}
    </article>
  );
}

interface ISection {
  className?: string;
  title: string;
  children: ReactNode;
}

function Section({ className, title, children }: ISection) {
  return (
    <section className="mb-2 pb-2 border-b last:border-b-0 border-yellow-200">
      <h3 className="text-xl font-serif m-1">{title}</h3>
      {children}
    </section>
  );
}
function Pill({ children }) {
  return (
    <span className="inline-block capitalize px-1 py-px bg-yellow-500 shadow-sm rounded m-2px">
      {children}
    </span>
  );
}
