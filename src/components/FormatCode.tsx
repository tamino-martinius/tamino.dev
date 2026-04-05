import type { ReactNode } from "react";

export function formatCodeElements(str: string): ReactNode[] {
  const parts = str.split(" ");
  const result: ReactNode[] = [];
  parts.forEach((part, i) => {
    if (i > 0) {
      result.push(<span key={`sp-${i}`} className="white-space space"></span>);
    }
    if (part) {
      result.push(<span key={`t-${i}`}>{part}</span>);
    }
  });
  return result;
}
