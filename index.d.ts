/**
 * Stub until a more complete typing source is available (or until it is typed more completely)
 */
interface IMonster extends APIResource {
  challenge_rating: number;
  armor_class: number;
  hit_points: number;
  speed: Record<string, string>;
  xp: number;
  size: CreatureSize;
  subtype: null | string;
  type: string;
  alignment: string;
  strength: number;
  dexterity: nuimber;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  senses: Record<string, string | number>;
  proficiencies: {
    value: number;
    proficiency: APIResource;
  }[];
  damage_immunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  condition_immunities: APIResource[];
  special_abilities: Entry[];
  actions: Entry[];
  legendary_actions: Entry[];
}

type CreatureSize =
  | "Fine"
  | "Diminutive"
  | "Tiny"
  | "Small"
  | "Medium"
  | "Large"
  | "Huge"
  | "Gargantuan"
  | "Colossal";

interface APIResource {
  index: string;
  name: string;
  url: string;
}

interface Entry {
  name: string;
  desc: string;
}
