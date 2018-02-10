export enum Section {
  Header,
  Skills,
  CurriculumVitae,
  Experiments,
  Projects,
  Talks,
  Packages,
  Misc,
};

export interface Stage {
  startsAt: Date,
  endsAt?: Date,
  skills: { [key: string]: Skill },
};

export interface Job extends Stage {
  company: string,
  remote: boolean,
  position: string | string[],
};

export interface Education extends Stage {
  university: string,
  graduiation: string,
};

export interface ShowCase extends Stage {
  name: string,
  description: string,
  urls: string[],
  media: string[],
};

export interface Skill {
  level: number,
  name: string,
};

export interface SkillSet {
  title: string,
  data: SkillSet[] | { [key: string]: Skill },
};
