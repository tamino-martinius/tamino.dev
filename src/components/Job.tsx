import { useMemo } from "react";
import type { Job as JobType } from "../data_types";
import BooleanValue from "./BooleanValue";
import CodeLine from "./CodeLine";
import Stage from "./Stage";
import StringValue from "./StringValue";
import Tab from "./Tab";
import VariableName from "./VariableName";

export default function Job({ data, isLast }: { data: JobType; isLast: boolean }) {
  const startYear = data.startsAt.getFullYear();
  const endYear = data.endsAt ? data.endsAt.getFullYear() : " now";

  const mainPosition = useMemo(() => {
    const position = Array.isArray(data.position) ? data.position[0] : data.position;
    const remote = data.remote ? "(remote) " : "";
    return remote + position;
  }, [data]);

  return (
    <Stage
      className="job"
      abbreviation={`${startYear}-${endYear} - ${data.company} - ${mainPosition}`}
      data={data}
      isLast={isLast}
    >
      <CodeLine>
        <Tab />
        <Tab />
        <span className="variable">company</span>
        <span className="expression">:</span>
        <span className="white-space space"></span>
        <StringValue value={data.company} />
        <span className="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab />
        <Tab />
        <VariableName name="remote" />
        <span className="expression">:</span>
        <span className="white-space space"></span>
        <BooleanValue value={data.remote} />
        <span className="expression">,</span>
      </CodeLine>
      {Array.isArray(data.position) ? (
        <>
          <CodeLine>
            <Tab />
            <Tab />
            <VariableName name="position" />
            <span className="expression">:</span>
            <span className="white-space space"></span>
            <span className="expression">[</span>
          </CodeLine>
          {data.position.map((position) => (
            <CodeLine key={position}>
              <Tab />
              <Tab />
              <Tab />
              <StringValue value={position} />
              <span className="expression">,</span>
            </CodeLine>
          ))}
          <CodeLine>
            <Tab />
            <Tab />
            <span className="expression">],</span>
          </CodeLine>
        </>
      ) : (
        <CodeLine>
          <Tab />
          <Tab />
          <VariableName name="position" />
          <span className="expression">:</span>
          <span className="white-space space"></span>
          <StringValue value={data.position} />
          <span className="expression">,</span>
        </CodeLine>
      )}
    </Stage>
  );
}
