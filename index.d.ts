/**
 * Stub until a more complete typing source is available (or until it is typed more completely)
 */
interface IMonster {
  challenge_rating: number;
  index: string;
  name: string;
  url: string;
  xp: number;
}

type IMonsterIndex = Pick<IMonster, "index" | "url" | "name">;
