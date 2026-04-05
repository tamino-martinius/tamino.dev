import { useMemo } from "react";
import { useAppContext } from "../AppContext";

export default function VariableName({ name, length }: { name: string; length?: number }) {
  const { snakeCase } = useAppContext();

  const displayName = useMemo(() => snakeCase(name), [name, snakeCase]);

  const padLeft = useMemo(() => {
    if (length !== undefined && displayName.length < length) {
      return length - displayName.length;
    }
    return 0;
  }, [length, displayName]);

  return (
    <span className="variable">
      {displayName}
      {padLeft > 0 &&
        Array.from({ length: padLeft }, (_, i) => (
          <span key={i} className="white-space space"></span>
        ))}
    </span>
  );
}
