import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useAppContext } from "../AppContext";
import { Language, languages } from "../data_types";

const extensions: Record<Language, string> = {
  [Language.ruby]: "rb",
  [Language.typescript]: "ts",
  [Language.javascript]: "js",
};

export default function CommandLine() {
  const { language, setLanguage } = useAppContext();
  const [animationDone, setAnimationDone] = useState(() =>
    document.body.classList.contains("step-7"),
  );

  const now = useMemo(() => {
    const el = document.getElementById("loader-now");
    return el?.textContent || ` ${new Date().toString().substring(0, 24)} `;
  }, []);

  useEffect(() => {
    if (animationDone) return;
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("step-7")) {
        setAnimationDone(true);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [animationDone]);

  useLayoutEffect(() => {
    if (!animationDone) return;
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  }, [animationDone]);

  if (!animationDone) return null;

  return (
    <div className="command-line">
      <div className="line">
        <span> Last login:{now}on ttys007 </span>
      </div>
      <div className="line">
        <span className="path">~/tamino.dev</span>
        <span className="branch"> main</span>
        <span className="command">cat</span>
        <span className="lang-select">
          {languages.map((lang) => (
            <span key={lang}>
              <span className={`white-space space${lang !== language ? " collapsible" : ""}`} />
              <span
                className={`lang-option selectable${lang !== language ? " collapsible" : ""}${lang === language ? " active" : ""}`}
                onClick={() => setLanguage(lang)}
              >
                main.{extensions[lang]}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
