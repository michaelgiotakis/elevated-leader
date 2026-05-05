import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-ivory border border-warm-stone p-8", className)}>
      {children}
    </div>
  );
}
