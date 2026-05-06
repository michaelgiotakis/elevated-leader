import Link from "next/link";
import { Container } from "./Container";

export type Lever = "identity" | "structure" | "leverage";

interface LeverNavProps {
  activeLever: Lever;
}

const LEVERS = [
  {
    id: "identity" as Lever,
    label: "Elevate Your Self",
    href: "/courses/elevate-your-self",
    activeBg: "bg-muted-rose/10",
    activeBorder: "border-muted-rose/30",
    activeText: "text-muted-rose",
  },
  {
    id: "structure" as Lever,
    label: "Streamline Your Structure",
    href: "/courses/streamline-your-structure",
    activeBg: "bg-slate/10",
    activeBorder: "border-slate/30",
    activeText: "text-slate",
  },
  {
    id: "leverage" as Lever,
    label: "Unlock Your Leverage",
    href: "/courses/unlock-your-leverage",
    activeBg: "bg-eucalyptus/10",
    activeBorder: "border-eucalyptus/30",
    activeText: "text-eucalyptus",
  },
];

export function LeverNav({ activeLever }: LeverNavProps) {
  return (
    <nav className="bg-ivory py-4 md:py-5">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-obsidian/35 shrink-0">
            Explore the three levers
          </p>
          <div className="flex flex-wrap gap-2">
            {LEVERS.map((lever) => {
              const isActive = lever.id === activeLever;
              return (
                <Link
                  key={lever.id}
                  href={lever.href}
                  className={[
                    "font-sans text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors duration-150",
                    isActive
                      ? `${lever.activeBg} ${lever.activeBorder} ${lever.activeText}`
                      : "bg-transparent border-warm-stone/40 text-obsidian/55 hover:bg-warm-stone/10 hover:text-obsidian",
                  ].join(" ")}
                >
                  {lever.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
}
