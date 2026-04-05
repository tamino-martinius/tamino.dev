export default function NumberValue({ value, className }: { value: string; className?: string }) {
  return (
    <span
      className={`number ${className || ""}`}
      style={{ "--value": value } as React.CSSProperties}
    >
      {value}
    </span>
  );
}
