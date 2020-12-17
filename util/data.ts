import log from "./log";

const api = "https://www.dnd5eapi.co/api";
const { NODE_ENV } = process.env;

export async function fetchIndex() {
  const response = await fetch(`${api}/monsters`);
  const { count, results } = await response.json();

  log.event("Fetched %d monster indexes from D&D API", count);

  return results;
}

export async function pickTwo(monsters: APIResource[]): Promise<[IMonster, IMonster]> {
  const [one, two] =
    NODE_ENV === "development"
      ? [
          monsters.find((m) => m.name === "Young Green Dragon").index,
          monsters.find((m) => m.name === "Archmage").index,
        ]
      : [
          monsters[Math.floor(Math.random() * monsters.length)].index,
          monsters[Math.floor(Math.random() * monsters.length)].index,
        ];

  return [
    await (await fetch(`${api}/monsters/${one}`)).json(),
    await (await fetch(`${api}/monsters/${two}`)).json(),
  ];
}
