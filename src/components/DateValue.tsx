import { useMemo } from "react";
import { useAppContext } from "../AppContext";
import StringValue from "./StringValue";

export default function DateValue({ value }: { value?: Date }) {
  const { isJs, isRuby } = useAppContext();
  const { languageHelper } = useAppContext();

  const date = useMemo(() => {
    if (!value) return "";
    if (value.getDate() === 1 && value.getMonth() === 0 && isJs) {
      return String(value.getFullYear());
    }
    return value.toISOString().substr(0, 10);
  }, [value, isJs]);

  if (!value) {
    return <span className="constant">{languageHelper.undefined}</span>;
  }

  return (
    <div className="date">
      {isJs && <span className="keyword">new</span>}
      {isJs && <span className="white-space space"></span>}
      <span className="class">Date</span>
      {isRuby && <span className="expression">.</span>}
      {isRuby && <span className="variable">parse</span>}
      <span className="expression">(</span>
      <StringValue value={date} />
      <span className="expression">)</span>
    </div>
  );
}
