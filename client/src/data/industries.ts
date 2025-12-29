export interface Industry {
  id: string;
  name: string;
  recommendedCoreTier: string;
  recommendedBundles: string[];
  typicalOutcomes: string[];
  workflowHighlights: string[];
  estimatedMonthlyRange: string;
}

export const industries: Industry[] = [
  {
    id: "landscaping",
    name: "Landscaping",
    recommendedCoreTier: "Core Growth",
    recommendedBundles: ["Gorilla CRM", "Gorilla Dispatch", "Gorilla Pay"],
    typicalOutcomes: ["30% more quotes approved", "10hrs/week saved on scheduling"],
    workflowHighlights: ["Auto-quote follow up", "Crew routing"],
    estimatedMonthlyRange: "$200 - $400",
  },
  {
    id: "hvac",
    name: "HVAC",
    recommendedCoreTier: "Core Pro",
    recommendedBundles: ["Gorilla CRM", "Gorilla Dispatch", "Gorilla Reputation"],
    typicalOutcomes: ["Higher Google ranking", "More emergency calls booked"],
    workflowHighlights: ["Service reminders", "Tech tracking"],
    estimatedMonthlyRange: "$300 - $600",
  },
  {
    id: "general-contractor",
    name: "General Contractor",
    recommendedCoreTier: "Core Pro",
    recommendedBundles: ["Gorilla CRM", "Gorilla Pay", "Gorilla Analytics"],
    typicalOutcomes: ["Better project visibility", "Faster payments"],
    workflowHighlights: ["Milestone billing", "Sub-contractor management"],
    estimatedMonthlyRange: "$300 - $550",
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    recommendedCoreTier: "Core Starter",
    recommendedBundles: ["Gorilla CRM", "Gorilla Dispatch"],
    typicalOutcomes: ["Reduced no-shows", "Recurring booking growth"],
    workflowHighlights: ["SMS reminders", "Recurring schedule"],
    estimatedMonthlyRange: "$150 - $300",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    recommendedCoreTier: "Core Growth",
    recommendedBundles: ["Gorilla CRM", "Gorilla Automate"],
    typicalOutcomes: ["Faster lead response", "Automated open house follow-up"],
    workflowHighlights: ["Lead nurture campaigns", "Listing marketing"],
    estimatedMonthlyRange: "$200 - $450",
  },
  {
    id: "law-firm",
    name: "Law Firm",
    recommendedCoreTier: "Core Enterprise",
    recommendedBundles: ["Gorilla CRM", "Gorilla Analytics"],
    typicalOutcomes: ["Higher client trust", "Better case tracking"],
    workflowHighlights: ["Intake automation", "Document collection"],
    estimatedMonthlyRange: "$500 - $1000",
  },
];
