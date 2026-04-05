import { useMemo } from "react";
import { useAppContext } from "../AppContext";
import { Section as SectionEnum } from "../data_types";
import { animate, Easing } from "../util";
import CodeLine from "./CodeLine";

export default function Section({ section }: { section: SectionEnum }) {
  const { languageHelper } = useAppContext();

  const sections = useMemo(() => {
    const keys = Object.keys(SectionEnum);
    return keys.slice(keys.length / 2);
  }, []);

  const title = SectionEnum[section];

  const stars = (str: string) => new Array(str.length + 2).join(languageHelper.commentChar);

  const scrollToSection = (name: string) => {
    if (name !== title) {
      const target = document.querySelector(`.section[data-value=${name}]`);
      const html = document.querySelector("html");
      if (target && html) {
        animate({
          target: html,
          key: "scrollTop",
          value: (target as HTMLElement).offsetTop,
          duration: 300,
          ease: Easing.EaseInOut,
        });
      }
    }
  };

  return (
    <div className="section" data-value={title}>
      <CodeLine>
        <span className="comment">{languageHelper.commentEnd}</span>
        {sections.map((s) => (
          <span
            key={`star1-${s}`}
            className={`comment${title !== s ? " collapsible" : ""}${title === s ? " active" : ""}`}
          >
            {stars(s)}
          </span>
        ))}
        <span className="comment">
          {languageHelper.commentChar}
          {languageHelper.commentChar}
        </span>
      </CodeLine>
      <CodeLine>
        <span className="comment">{languageHelper.commentChar}</span>
        {sections.map((s) => (
          <span key={`nav-${s}`}>
            <span className={`white-space space${title !== s ? " collapsible" : ""}`} />
            <span
              className={`comment selectable${title !== s ? " collapsible" : ""}${title === s ? " active" : ""}`}
              onClick={() => scrollToSection(s)}
            >
              {s}
            </span>
          </span>
        ))}
        <span className="white-space space"></span>
        <span className="comment">{languageHelper.commentChar}</span>
      </CodeLine>
      <CodeLine>
        <span className="comment">{languageHelper.commentChar}</span>
        {sections.map((s) => (
          <span
            key={`star3-${s}`}
            className={`comment${title !== s ? " collapsible" : ""}${title === s ? " active" : ""}`}
          >
            {stars(s)}
          </span>
        ))}
        <span className="comment">
          {languageHelper.commentChar}
          {languageHelper.commentEnd}
        </span>
      </CodeLine>
    </div>
  );
}
