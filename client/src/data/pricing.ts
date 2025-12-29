export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const coreTiers: PricingTier[] = [
  {
    id: "core-starter",
    name: "Core Starter",
    price: "$199/mo",
    description: "Perfect for new businesses needing a professional presence.",
    features: [
      "Custom High-Speed Website",
      "Secure Hosting & SSL",
      "Basic SEO Setup",
      "Monthly Content Updates (1hr)",
      "Daily Backups",
    ],
  },
  {
    id: "core-growth",
    name: "Core Growth",
    price: "$399/mo",
    description: "Accelerate your growth with advanced SEO and marketing tools.",
    features: [
      "Everything in Starter",
      "Advanced Local SEO",
      "Google Business Profile Mgmt",
      "Reputation Management Lite",
      "Monthly Content Updates (3hrs)",
      "Monthly Performance Report",
    ],
    isPopular: true,
  },
  {
    id: "core-pro",
    name: "Core Pro",
    price: "$699/mo",
    description: "Dominance in your local market with aggressive strategies.",
    features: [
      "Everything in Growth",
      "Aggressive SEO Strategy",
      "Content Marketing (2 blogs/mo)",
      "Social Media Posting (Weekly)",
      "Priority Support",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "core-enterprise",
    name: "Core Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations and franchises.",
    features: [
      "Everything in Pro",
      "Custom App Development",
      "Multi-location Support",
      "API Integrations",
      "SLA Guarantees",
      "24/7 Support Access",
    ],
  },
];

export const launchPackages = [
  {
    name: "Launch Lite",
    price: "$500",
    description: "Quick setup for Starter plans.",
  },
  {
    name: "Launch Standard",
    price: "$1,000",
    description: "Comprehensive setup for Growth plans.",
  },
  {
    name: "Launch Advanced",
    price: "$2,500",
    description: "Deep integration for Pro plans.",
  },
];
