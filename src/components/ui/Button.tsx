import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#A07848] text-ivory hover:bg-[#8B6035]",
  secondary:
    "border border-[rgba(6,7,8,0.60)] text-obsidian hover:bg-obsidian hover:text-ivory",
  ghost:
    "border border-[rgba(246,241,233,0.45)] text-ivory hover:border-[rgba(246,241,233,0.70)] hover:bg-[rgba(246,241,233,0.06)]",
};

const base =
  "inline-block font-sans font-medium text-[11px] tracking-[0.14em] uppercase px-7 py-3 transition-colors duration-200 cursor-pointer";

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  external = false,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
