export interface ImpactMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  excerpt?: string;
  challenge: string;
  solution: string;
  impact: ImpactMetric[];
  stack: string[];
  liveUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
  body: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string | null;
}

export interface Course {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  enrolled: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface RoadmapPhase {
  tag: string;
  title: string;
  period: string;
  points: string[];
}

export interface EnrollForm {
  name: string;
  email: string;
  phone: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
