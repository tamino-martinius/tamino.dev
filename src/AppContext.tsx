import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Language, LanguageHelper, languages, Section } from "./data_types";
import { snakeCase } from "./util";

interface AppContextType {
  language: Language;
  languageHelper: LanguageHelper;
  setLanguage: (lang: Language) => void;
  isJs: boolean;
  isTs: boolean;
  isRuby: boolean;
  snakeCase: (str: string) => string;
  Section: typeof Section;
}

// biome-ignore lint/style/noNonNullAssertion: context is always provided by AppProvider
const AppContext = createContext<AppContextType>(null!);

export function useAppContext() {
  return useContext(AppContext);
}

const themeCount = 3;

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(
    () => languages[Math.floor(Math.random() * languages.length)],
  );

  const languageHelper = useMemo(() => new LanguageHelper(language), [language]);
  const isJs = language === Language.javascript || language === Language.typescript;
  const isTs = language === Language.typescript;
  const isRuby = language === Language.ruby;

  const snakeCaseHelper = useCallback((str: string) => (isRuby ? snakeCase(str) : str), [isRuby]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  useEffect(() => {
    for (const lang of languages) {
      document.body.classList.remove(`lang-${Language[lang]}`);
    }
    document.body.classList.add(`lang-${Language[language]}`);

    const title = document.title.substr(0, document.title.length - 2);
    switch (language) {
      case Language.ruby:
        document.title = `${title}rb`;
        break;
      case Language.typescript:
        document.title = `${title}ts`;
        break;
      case Language.javascript:
        document.title = `${title}js`;
        break;
    }
  }, [language]);

  useEffect(() => {
    let theme = 0;
    const handler = (e: KeyboardEvent) => {
      switch (e.which) {
        case 32: {
          e.preventDefault();
          theme += 1;
          for (let i = 0; i < themeCount; i++) {
            document.body.classList.remove(`theme-${i}`);
          }
          document.body.classList.add(`theme-${theme % themeCount}`);
          break;
        }
        case 82:
          setLanguageState(Language.ruby);
          break;
        case 74:
          setLanguageState(Language.javascript);
          break;
        case 84:
          setLanguageState(Language.typescript);
          break;
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    console.log(
      "%c~/tamino.dev %c%c  main %c cat %cREADME.md\n\n%c# tamino.dev\n\nCheck out the source on [GitHub](https://github.com/tamino-martinius/tamino.dev)",
      'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #2E8CCF; color: #000000;',
      'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #2E8CCF;',
      'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #000000;',
      'font-family: "Fira Code", monospace; padding: 2px 0; color: #75880C;',
      'font-family: "Fira Code", monospace; padding: 2px 0; color: #011;',
      'font-family: "Fira Code", monospace; padding: 2px 0; color: #233;',
    );
  }, []);

  const value = useMemo(
    () => ({
      language,
      languageHelper,
      setLanguage,
      isJs,
      isTs,
      isRuby,
      snakeCase: snakeCaseHelper,
      Section,
    }),
    [language, languageHelper, setLanguage, isJs, isTs, isRuby, snakeCaseHelper],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
