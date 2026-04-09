import { useEffect, useRef } from "react";
import CodeLine from "./components/CodeLine";
import CommandLine from "./components/CommandLine";
import CurriculumVitae from "./components/CurriculumVitae";
import Legal from "./components/Legal";
import Profile from "./components/Profile";
import SectionComponent from "./components/Section";
import ShowCaseSection from "./components/ShowCaseSection";
import SkillSet from "./components/SkillSet";
import * as data from "./data";
import { Section } from "./data_types";
import { animate, Easing } from "./util";

const initialHash = decodeURIComponent(window.location.hash.slice(1));

export default function App() {
  const scrolledToHash = useRef(false);

  useEffect(() => {
    // Wait for the loading animation to finish before setting up observers
    function onAnimationDone(): IntersectionObserver {
      const sections = document.querySelectorAll<HTMLElement>(".section[data-value]");

      // Scroll to hash target on deep link (section or entry)
      if (initialHash && !scrolledToHash.current) {
        scrolledToHash.current = true;
        const target =
          document.querySelector<HTMLElement>(`.section[data-value=${CSS.escape(initialHash)}]`) ||
          document.querySelector<HTMLElement>(`[data-entry=${CSS.escape(initialHash)}]`);
        if (target) {
          const html = document.querySelector("html");
          if (html) {
            animate({
              target: html,
              key: "scrollTop",
              value: target.offsetTop,
              duration: 300,
              ease: Easing.EaseInOut,
            });
          }
        }
      }

      // Update hash on scroll — pick the topmost section still visible
      let suppressHashUpdate = !!initialHash;
      if (suppressHashUpdate) {
        setTimeout(() => {
          suppressHashUpdate = false;
        }, 500);
      }

      const onScroll = () => {
        if (suppressHashUpdate) return;
        const scrollY = window.scrollY;
        let current: string | undefined;
        for (const section of sections) {
          if (section.offsetTop <= scrollY + 1) {
            current = section.dataset.value;
          }
        }
        if (current) {
          history.replaceState(null, "", `#${current}`);
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });

      return new IntersectionObserver(onScroll);
    }

    if (document.body.classList.contains("step-7")) {
      const observer = onAnimationDone();
      return () => observer?.disconnect();
    }

    let observer: IntersectionObserver | undefined;
    const mutationObserver = new MutationObserver(() => {
      if (document.body.classList.contains("step-7")) {
        observer = onAnimationDone();
        mutationObserver.disconnect();
      }
    });
    mutationObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <CommandLine />
      <CodeLine />
      <Profile data={data} />
      <CodeLine />
      <CodeLine />
      <SectionComponent section={Section.CurriculumVitae} />
      <CodeLine />
      <CurriculumVitae data={data.curriculumVitae} />
      <CodeLine />
      <CodeLine />
      <ShowCaseSection section={Section.Projects} name="projects" data={data.projects} />
      <ShowCaseSection section={Section.Talks} name="talks" data={data.talks} />
      <ShowCaseSection section={Section.Packages} name="packages" data={data.packages} />
      <SectionComponent section={Section.Skills} />
      <CodeLine />
      {data.skills.map((skillset) => (
        <SkillSet key={skillset.title} title={skillset.title} skillset={skillset} />
      ))}
      <CodeLine />
      <CodeLine />
      <ShowCaseSection section={Section.Experiments} name="experiments" data={data.experiments} />
      <ShowCaseSection section={Section.Misc} name="misc" data={data.misc} />
      <Legal />
    </>
  );
}
