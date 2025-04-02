export interface NavItem {
  icon: string;
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string;
  funFact: string;
}

export interface ProcessStep {
  days: number;
  title: string;
  description: string;
  data: { name: string; value: number }[];
}