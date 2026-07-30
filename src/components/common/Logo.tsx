type LogoProps = {
  className?: string;
};
export function Logo({ className }: LogoProps) {
  return (
    <h1 className={`font-bold text-xl tracking-tight ${className ?? ""}`}>
      SindhanAI
    </h1>
  );
}
