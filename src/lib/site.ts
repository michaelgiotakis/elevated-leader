export const SITE_NAME = "The Elevated Leader";
export const SITE_TAGLINE = "Lead a business that runs itself.";
export const SITE_URL = "https://theelevatedleader.com";

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Method", href: "/method" },
  { label: "Diagnostic", href: "/diagnostic" },
  {
    label: "Courses",
    href: "/courses",
    dropdown: [
      { label: "Overview", href: "/courses" },
      { label: "Elevate Your Self", href: "/courses/elevate-your-self" },
      { label: "Streamline Your Structure", href: "/courses/streamline-your-structure" },
      { label: "Unlock Your Leverage", href: "/courses/unlock-your-leverage" },
    ],
  },
];

export const FOOTER_LINKS = [
  { label: "Method", href: "/method" },
  { label: "Courses", href: "/courses" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Flagship", href: "/flagship" },
  { label: "FAQ", href: "/faq" },
] as const;

export const CTA_LINKS = {
  diagnostic: "https://scoreapp.com/placeholder", // TODO: replace with live ScoreApp URL
  flagship: "/flagship",
  checkout: "https://buy.stripe.com/placeholder", // TODO: replace with live Stripe payment URL
} as const;
