export interface App {
  id: string;
  name: string;
  category: string;
  oneLiner: string;
  description: string;
  keyFeatures: string[];
  startingPriceMonthly?: number;
  bundleEligible: boolean;
}

export const apps: App[] = [
  {
    id: "gorilla-crm",
    name: "Gorilla CRM",
    category: "Sales and CRM",
    oneLiner: "Manage leads, pipelines, and customers in one place.",
    description: "A powerful CRM designed for service businesses. Track every interaction from lead to paid invoice.",
    keyFeatures: ["Visual Pipeline", "Automated Follow-ups", "Client Profiles", "Email Integration"],
    startingPriceMonthly: 49,
    bundleEligible: true,
  },
  {
    id: "gorilla-dispatch",
    name: "Gorilla Dispatch",
    category: "Operations and Dispatch",
    oneLiner: "Smart scheduling and route optimization for field teams.",
    description: "Keep your team on time and efficient. Drag and drop scheduling with GPS tracking.",
    keyFeatures: ["Drag & Drop Calendar", "Route Optimization", "Mobile App for Techs", "Job Status Updates"],
    startingPriceMonthly: 79,
    bundleEligible: true,
  },
  {
    id: "gorilla-pay",
    name: "Gorilla Pay",
    category: "Payments and Billing",
    oneLiner: "Invoices, estimates, and payments made simple.",
    description: "Get paid faster with digital invoices and instant payment links. Supports credit cards and ACH.",
    keyFeatures: ["Instant Invoicing", "Recurring Billing", "Payment Links", "QuickBooks Sync"],
    startingPriceMonthly: 29,
    bundleEligible: true,
  },
  {
    id: "gorilla-reputation",
    name: "Gorilla Reputation",
    category: "Reputation and Reviews",
    oneLiner: "Automate review requests and manage your online presence.",
    description: "Turn happy customers into 5-star reviews automatically. Monitor Google, Facebook, and Yelp.",
    keyFeatures: ["Automated Requests", "Review Monitoring", "Negative Feedback Blocking", "Social Sharing"],
    startingPriceMonthly: 39,
    bundleEligible: true,
  },
  {
    id: "gorilla-analytics",
    name: "Gorilla Analytics",
    category: "Analytics and Tracking",
    oneLiner: "Real-time dashboard for all your business metrics.",
    description: "Stop guessing. See exactly where your leads come from and which jobs are most profitable.",
    keyFeatures: ["Visual Dashboards", "ROI Tracking", "Call Tracking", "Custom Reports"],
    startingPriceMonthly: 59,
    bundleEligible: true,
  },
  {
    id: "gorilla-automate",
    name: "Gorilla Automate",
    category: "Automation and Integrations",
    oneLiner: "Connect your tools and automate repetitive tasks.",
    description: "Build custom workflows to save hours every week. Triggers and actions for every app.",
    keyFeatures: ["Custom Workflows", "Zapier Integration", "Email Automation", "SMS Triggers"],
    startingPriceMonthly: 69,
    bundleEligible: true,
  },
];
