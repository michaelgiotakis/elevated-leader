import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-semibold tracking-[0.2em] uppercase text-bronze mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}
