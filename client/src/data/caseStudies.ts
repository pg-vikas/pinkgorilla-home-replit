export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  metrics: {
    label: string;
    value: string;
  }[];
  before: string;
  after: string;
  imageUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "green-scapes",
    title: "Doubling Leads in 90 Days",
    client: "GreenScapes Landscaping",
    industry: "Landscaping",
    metrics: [
      { label: "Lead Increase", value: "+115%" },
      { label: "Calls Booked", value: "45/mo" },
    ],
    before: "Outdated wordpress site, no SEO, manual scheduling.",
    after: "Modern Core Growth site, #1 ranking for local keywords, auto-scheduling.",
  },
  {
    id: "urban-plumbing",
    title: "Streamlining Dispatch & Reviews",
    client: "Urban Plumbing Co.",
    industry: "Plumbing",
    metrics: [
      { label: "Reviews", value: "+4.9 Star Avg" },
      { label: "Admin Time Saved", value: "15hrs/wk" },
    ],
    before: "Pen and paper dispatch, negative review bias.",
    after: "Gorilla Dispatch & Reputation implemented. Automated flows.",
  },
  {
    id: "elite-roofing",
    title: "From Word-of-Mouth to Market Leader",
    client: "Elite Roofing",
    industry: "Construction",
    metrics: [
      { label: "Traffic Growth", value: "3,000%" },
      { label: "Projects Closed", value: "$2.5M" },
    ],
    before: "No digital presence, relied solely on referrals.",
    after: "Core Pro Enterprise build, dominating 3 counties.",
  },
];
