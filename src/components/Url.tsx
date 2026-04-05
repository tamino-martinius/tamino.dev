import { useMemo } from "react";

export default function Url({ value }: { value: string }) {
  const display = useMemo(() => {
    if (value.length > 70) {
      return value.replace("http://", "").replace("https://", "");
    }
    return value;
  }, [value]);

  return (
    <span className="string">
      {"'"}
      <a href={value} target="_blank" rel="noreferrer">
        {display}
      </a>
      {"'"}
    </span>
  );
}
