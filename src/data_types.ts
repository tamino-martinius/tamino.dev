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

export enum Language {
  ruby,
  typescript,
  javascript,
};

export const languages: Language[] = [
  Language.ruby,
  Language.typescript,
  Language.javascript,
];

export interface Stage {
  description?: string,
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

export class State {
  currentLanguage: Language;
  currentLanguageHelper: LanguageHelper;

  private getLanguageClass(lang: Language): string {
    return `lang-${Language[lang]}`;
  }

  get language(): Language {
    return this.currentLanguage;
  }

  set language(lang: Language) {
    this.currentLanguage = lang;
    this.currentLanguageHelper = new LanguageHelper(lang);
    for (const language of languages) {
      document.body.classList.remove(this.getLanguageClass(language));
    }
    document.body.classList.add(this.getLanguageClass(lang));
  }
};


export class LanguageHelper {
  constructor(private language: Language) {
  }

  get commentChar() {
    return this.language === Language.ruby ? '#' : '*';
  }

  get commentEnd() {
    return this.language === Language.ruby ? '#' : '/';
  }

  get comment() {
    return this.language === Language.ruby ? '#' : '//';
  }

  get undefined() {
    return this.language === Language.ruby ? 'nil' : 'undefined';
  }
};
