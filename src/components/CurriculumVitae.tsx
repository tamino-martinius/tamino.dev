import { useAppContext } from "../AppContext";
import type { Education as EducationType, Job as JobType } from "../data_types";
import CodeLine from "./CodeLine";
import Education from "./Education";
import Job from "./Job";
import VariableName from "./VariableName";

export default function CurriculumVitae({ data }: { data: (JobType | EducationType)[] }) {
  const { isJs, isTs } = useAppContext();

  return (
    <div className="curriculum-vitae">
      <CodeLine>
        {isJs && <span className="storage-type">const</span>}
        {isJs && <span className="white-space space"></span>}
        <VariableName name="curriculumVitae" />
        {isTs && <span className="keyword">:</span>}
        {isTs && <span className="white-space space"></span>}
        {isTs && <span className="expression">(</span>}
        {isTs && <span className="type class">Job</span>}
        {isTs && <span className="white-space space"></span>}
        {isTs && <span className="keyword">|</span>}
        {isTs && <span className="white-space space"></span>}
        {isTs && <span className="type class">Education</span>}
        {isTs && <span className="expression">)[]</span>}
        {isTs && <span className="white-space space"></span>}
        <span className="expression">=</span>
        <span className="white-space space"></span>
        <span className="expression">[</span>
      </CodeLine>
      {data.map((entry, index) =>
        "company" in entry ? (
          <Job key={index} data={entry as JobType} isLast={index === data.length - 1} />
        ) : (
          <Education key={index} data={entry as EducationType} isLast={index === data.length - 1} />
        ),
      )}
      <CodeLine>
        <span className="expression">]</span>
        {isJs && <span className="expression">;</span>}
      </CodeLine>
    </div>
  );
}
