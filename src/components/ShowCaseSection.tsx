import { useAppContext } from "../AppContext";
import type { Section as SectionEnum, ShowCase as ShowCaseType } from "../data_types";
import CodeLine from "./CodeLine";
import Section from "./Section";
import ShowCase from "./ShowCase";

export default function ShowCaseSection({
  section,
  name,
  data,
}: {
  section: SectionEnum;
  name: string;
  data: ShowCaseType[];
}) {
  const { isJs, isTs } = useAppContext();

  return (
    <div>
      <Section section={section} />
      <CodeLine />
      <CodeLine>
        {isJs && <span className="storage-type">const</span>}
        {isJs && <span className="white-space space"></span>}
        <span className="variable">{name}</span>
        {isTs && <span className="keyword">:</span>}
        {isTs && <span className="white-space space"></span>}
        {isTs && <span className="type class">ShowCase</span>}
        {isTs && <span className="expression">[]</span>}
        <span className="white-space space"></span>
        <span className="expression">=</span>
        <span className="white-space space"></span>
        <span className="expression">[</span>
      </CodeLine>
      {data.map((entry, index) => (
        <ShowCase key={index} data={entry} isLast={index === data.length - 1} />
      ))}
      <CodeLine>
        <span className="expression">];</span>
      </CodeLine>
      <CodeLine />
      <CodeLine />
    </div>
  );
}
