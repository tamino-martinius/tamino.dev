export default function BooleanValue({ value }: { value: boolean }) {
  return <span className="constant">{String(value)}</span>;
}
