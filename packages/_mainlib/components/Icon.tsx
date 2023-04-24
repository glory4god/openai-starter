export default function Icon({
  name,
  size,
  className,
}: {
  name: string;
  size: number;
  className?: string;
}) {
  return (
    <img
      alt=""
      src={`${name}`}
      width={size}
      height={size}
      className={className}
    />
  );
}
