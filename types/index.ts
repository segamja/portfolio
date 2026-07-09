export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  role: string;
  tech: string[];
  overview: string;
  challenge: string;
  architecture: string;
  contribution: string;
  result: string;
  lessons: string;
}

export interface EngineeringStory {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface CareerEntry {
  company: string;
  period: string;
  role: string;
  projects: string[];
}

export interface LearningItem {
  name: string;
  category: "framework" | "devops" | "ai";
  description: string;
}

export interface ContactInfo {
  github: string;
  email: string;
  resume: string;
}
