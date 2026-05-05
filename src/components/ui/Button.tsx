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
    "bg-bronze text-ivory hover:bg-rosewood",
  secondary:
    "border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory",
  ghost:
    "border border-ivory text-ivory hover:bg-ivory hover:text-obsidian",
};

const base =
  "inline-block font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200 cursor-pointer";

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
