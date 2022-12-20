export type Heros = {
  id: number;
  name: string;
  displayName: string;
  shortName: string;
  abilities: Ability[];
  roles: Role[];
  talents: Talent[];
  stat: Stat;
  language: Language;
  aliases: string[]
}