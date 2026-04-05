import type { ReactNode } from "react";

export default function CodeLine({ children }: { children?: ReactNode }) {
  return <div className="line">{children}</div>;
}
