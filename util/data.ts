import log from "./log";

const api = "https://www.dnd5eapi.co/api";
const { NODE_ENV } = process.env;

export async function fetchIndex() {
  const response = await fetch(`${api}/monsters`);
  const { count, results } = await response.json();

  log.event("Fetched %d monster indexes from D&D API", count);

  return results;
}

export async function fetchMonster(index: string): Promise<IMonster> {
  return (await fetch(`${api}/monsters/${index}`)).json();
}

export async function fetchTwoRandomMonsters(monsters: APIResource[]): Promise<IMonster[]> {
  return Promise.all(pickTwo(monsters).map(fetchMonster));
}

export function pickTwo(monsters: APIResource[]): [string, string] {
  const [one, two] = [
    monsters[Math.floor(Math.random() * monsters.length)].index,
    monsters[Math.floor(Math.random() * monsters.length)].index,
  ];

  return [one, two];
}
