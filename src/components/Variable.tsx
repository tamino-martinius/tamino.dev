import type { ReactNode } from "react";
import { useAppContext } from "../AppContext";
import CodeLine from "./CodeLine";
import VariableName from "./VariableName";

export default function Variable({
  name,
  length,
  type,
  children,
}: {
  name: string;
  length?: number;
  type?: string;
  children?: ReactNode;
}) {
  const { isJs, isTs, languageHelper } = useAppContext();

  return (
    <CodeLine>
      {isJs && <span className="storage-type">const</span>}
      {isJs && <span className="white-space space"></span>}
      <VariableName name={name} length={length} />
      {type && isTs && (
        <>
          <span className="keyword">:</span>
          <span className="white-space space"></span>
          <span className="type class">{type}</span>
        </>
      )}
      <span className="white-space space"></span>
      <span className="keyword">=</span>
      <span className="white-space space"></span>
      {children || <span className="constant">{languageHelper.undefined}</span>}
      {isJs && <span className="expression">;</span>}
    </CodeLine>
  );
}
