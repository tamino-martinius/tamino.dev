import CodeLine from "./components/CodeLine";
import CurriculumVitae from "./components/CurriculumVitae";
import Legal from "./components/Legal";
import Privacy from "./components/Privacy";
import Profile from "./components/Profile";
import SectionComponent from "./components/Section";
import ShowCaseSection from "./components/ShowCaseSection";
import SkillSet from "./components/SkillSet";
import * as data from "./data";
import { Section } from "./data_types";

export default function App() {
  return (
    <>
      <CodeLine />
      <Profile data={data} />
      <SectionComponent section={Section.Skills} />
      <CodeLine />
      {data.skills.map((skillset) => (
        <SkillSet key={skillset.title} title={skillset.title} skillset={skillset} />
      ))}
      <CodeLine />
      <SectionComponent section={Section.CurriculumVitae} />
      <CodeLine />
      <CurriculumVitae data={data.curriculumVitae} />
      <CodeLine />
      <CodeLine />
      <ShowCaseSection section={Section.Experiments} name="experiments" data={data.experiments} />
      <ShowCaseSection section={Section.Projects} name="projects" data={data.projects} />
      <ShowCaseSection section={Section.Talks} name="talks" data={data.talks} />
      <ShowCaseSection section={Section.Packages} name="packages" data={data.packages} />
      <ShowCaseSection section={Section.Misc} name="misc" data={data.misc} />
      <Legal />
      <CodeLine />
      <Privacy />
    </>
  );
}
