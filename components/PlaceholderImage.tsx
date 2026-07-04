export default function PlaceholderImage({
  gradient,
  className = "",
}: {
  gradient: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_30%,rgba(232,207,140,0.5),transparent_45%)]" />
    </div>
  );
}
