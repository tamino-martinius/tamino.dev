import { type ReactNode, useState } from "react";
import { useAppContext } from "../AppContext";
import type { Stage as StageType } from "../data_types";
import CodeLine from "./CodeLine";
import Collapsed from "./Collapsed";
import Comment from "./Comment";
import DateValue from "./DateValue";
import MultiLineString from "./MultiLineString";
import Tab from "./Tab";
import VariableName from "./VariableName";

const initialHash = decodeURIComponent(window.location.hash.slice(1));

export default function Stage({
  data,
  abbreviation,
  isLast,
  className,
  entryId,
  children,
}: {
  data: StageType;
  abbreviation: string;
  isLast: boolean;
  className?: string;
  entryId?: string;
  children?: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(!entryId || initialHash !== entryId);
  const { isRuby, languageHelper } = useAppContext();

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed((c) => !c);
  };

  return (
    <div
      className={`stage${collapsed ? " collapsed" : ""}${className ? ` ${className}` : ""}`}
      data-entry={entryId}
      onClick={toggle}
    >
      {collapsed ? (
        <Comment indentation={1} comment={abbreviation}>
          <Collapsed />
        </Comment>
      ) : (
        <>
          <CodeLine>
            <Tab />
            <span className="expression">{"{"}</span>
          </CodeLine>
          {children}
          {data.description && (
            <>
              <CodeLine>
                <Tab />
                <Tab />
                <span className="variable">description</span>
                <span className="expression">:</span>
                <span className="white-space space"></span>
                <span className="string">{languageHelper.multilineString}</span>
              </CodeLine>
              <MultiLineString value={data.description.trim()} indentation={3} />
              <CodeLine>
                <Tab />
                <Tab />
                <span className="string">{languageHelper.multilineString}</span>
                <span className="expression">,</span>
              </CodeLine>
            </>
          )}
          <CodeLine>
            <Tab />
            <Tab />
            <VariableName name="startsAt" />
            <span className="expression">:</span>
            <span className="white-space space"></span>
            <DateValue value={data.startsAt} />
            <span className="expression">,</span>
          </CodeLine>
          <CodeLine>
            <Tab />
            <Tab />
            <VariableName name="endsAt" />
            <span className="expression">:</span>
            <span className="white-space space"></span>
            <DateValue value={data.endsAt} />
            <span className="expression">,</span>
          </CodeLine>
          <CodeLine>
            <Tab />
            <Tab />
            <VariableName name="skills" />
            <span className="expression">:</span>
            <span className="white-space space"></span>
            <span className="expression">[</span>
          </CodeLine>
          {Object.entries(data.skills).map(([key, skill]) => (
            <CodeLine key={key}>
              <Tab />
              <Tab />
              <Tab />
              <span
                className="variable progress"
                style={{ "--value": skill.level } as React.CSSProperties}
              >
                {key}
              </span>
              <span className="expression">,</span>
            </CodeLine>
          ))}
          <CodeLine>
            <Tab />
            <Tab />
            <span className="expression">],</span>
          </CodeLine>
          <CodeLine>
            <Tab />
            <span className="expression">{"}"}</span>
            {isRuby && <span className="expression">.with_indifferent_access</span>}
            <span className="expression">,</span>
          </CodeLine>
          {!isLast && <CodeLine />}
        </>
      )}
    </div>
  );
}
