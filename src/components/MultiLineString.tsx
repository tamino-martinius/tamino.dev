import { useMemo } from "react";
import CodeLine from "./CodeLine";
import { formatCodeElements } from "./FormatCode";
import Tab from "./Tab";

export default function MultiLineString({
  indentation,
  value,
}: {
  indentation: number;
  value: string;
}) {
  const lines = useMemo(() => value.split("\n").map((str: string) => str.trim()), [value]);

  return (
    <div className="multi-line-string">
      {lines.map((line, index) => (
        <CodeLine key={index}>
          {Array.from({ length: indentation }, (_, i) => (
            <Tab key={i} />
          ))}
          <span className="string">{formatCodeElements(line)}</span>
        </CodeLine>
      ))}
    </div>
  );
}
