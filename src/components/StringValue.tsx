import { formatCodeElements } from "./FormatCode";

export default function StringValue({ value }: { value: string | number }) {
  return <span className="string">{formatCodeElements(`'${value}'`)}</span>;
}
