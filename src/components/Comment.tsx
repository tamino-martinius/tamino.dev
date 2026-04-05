import type { ReactNode } from "react";
import { useAppContext } from "../AppContext";
import CodeLine from "./CodeLine";
import { formatCodeElements } from "./FormatCode";
import Tab from "./Tab";

export default function Comment({
  indentation,
  comment,
  children,
}: {
  indentation?: number;
  comment: string;
  children?: ReactNode;
}) {
  const { languageHelper } = useAppContext();

  return (
    <CodeLine>
      {indentation != null && Array.from({ length: indentation }, (_, i) => <Tab key={i} />)}
      <span className="comment">{formatCodeElements(`${languageHelper.comment} ${comment}`)}</span>
      {children}
    </CodeLine>
  );
}
