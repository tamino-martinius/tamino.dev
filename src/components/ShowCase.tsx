import type { ShowCase as ShowCaseType } from "../data_types";
import CodeLine from "./CodeLine";
import Stage from "./Stage";
import StringValue from "./StringValue";
import Tab from "./Tab";
import Url from "./Url";
import VariableName from "./VariableName";

export default function ShowCase({ data, isLast }: { data: ShowCaseType; isLast: boolean }) {
  return (
    <Stage className="show-case" abbreviation={data.name} data={data} isLast={isLast}>
      <CodeLine>
        <Tab />
        <Tab />
        <VariableName name="name" />
        <span className="expression">:</span>
        <span className="white-space space"></span>
        <StringValue value={data.name} />
        <span className="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab />
        <Tab />
        <VariableName name="urls" />
        <span className="expression">:</span>
        <span className="white-space space"></span>
        <span className="expression">[</span>
      </CodeLine>
      {data.urls.map((url) => (
        <CodeLine key={url}>
          <Tab />
          <Tab />
          <Tab />
          <Url value={url} />
          <span className="expression">,</span>
        </CodeLine>
      ))}
      <CodeLine>
        <Tab />
        <Tab />
        <span className="expression">],</span>
      </CodeLine>
    </Stage>
  );
}
