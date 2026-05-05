export const SITE_NAME = "The Elevated Leader";
export const SITE_TAGLINE = "Lead a business that runs itself.";
export const SITE_URL = "https://theelevatedleader.com";

export const NAV_LINKS = [
  { label: "Method", href: "/method" },
  { label: "Courses", href: "/courses" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "FAQ", href: "/faq" },
] as const;

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
