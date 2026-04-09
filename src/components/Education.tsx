import type { Education as EducationType } from "../data_types";
import CodeLine from "./CodeLine";
import Stage from "./Stage";
import StringValue from "./StringValue";
import Tab from "./Tab";
import VariableName from "./VariableName";

export default function Education({ data, isLast }: { data: EducationType; isLast: boolean }) {
  const startYear = data.startsAt.getFullYear();
  const endYear = data.endsAt ? data.endsAt.getFullYear() : " now";

  return (
    <Stage
      className="education"
      abbreviation={`${startYear}-${endYear} - ${data.university} - ${data.graduiation}`}
      data={data}
      isLast={isLast}
      entryId={data.university}
    >
      <CodeLine>
        <Tab />
        <Tab />
        <VariableName name="university" />
        <span className="expression">:</span>
        <span className="white-space space"></span>
        <StringValue value={data.university} />
        <span className="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab />
        <Tab />
        <VariableName name="graduiation" />
        <span className="expression">:</span>
        <span className="white-space space"></span>
        <StringValue value={data.graduiation} />
        <span className="expression">,</span>
      </CodeLine>
    </Stage>
  );
}
