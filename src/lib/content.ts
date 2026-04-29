import type { BlogPost, CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "greenafrica-dashboard",
    title: "GreenAfrica Dashboard",
    category: "Climate Tech",
    tagline: "A real-time view of emissions across regions.",
    challenge:
      "Environmental teams operated across fragmented data sources, relying heavily on manual exports, inconsistent reporting formats, and delayed insights. This made it difficult to track emissions accurately, respond to environmental risks in time, and align regional sustainability efforts with global reporting standards.",
    solution:
      "We designed and built a centralized analytics platform that aggregates data from IoT sensors, field surveys, and satellite feeds into a unified, real-time dashboard. The system provides automated reporting, visual insights, and anomaly detection, enabling teams to monitor emissions continuously and make faster, data-driven environmental decisions.",
    impact: [
      { label: "Report time", value: "-78%" },
      { label: "Regions covered", value: "12" },
      { label: "Data sources", value: "9" },
    ],
    stack: ["Next.js", "PostgreSQL", "D3", "AWS"],
    liveUrl: "https://greenafrica.example.com",
  },
  {
    slug: "logistics-command-center",
    title: "Logistics Command Center",
    category: "Operations",
    tagline: "Live dispatch for a continent-scale fleet.",
    challenge:
      "Fleet operations lacked real-time visibility due to fragmented tools such as spreadsheets, manual logs, and radio communication. This resulted in inefficient routing, missed delivery windows, and limited operational insight into fleet performance across regions.",
    solution:
      "We developed a unified logistics command center that integrates live GPS tracking, intelligent routing, dispatch management, and performance analytics. The platform connects seamlessly with existing ERP systems, providing operators with a single source of truth for monitoring and optimizing fleet operations in real time.",
    impact: [
      { label: "On-time delivery", value: "+34%" },
      { label: "Ops headcount", value: "-22%" },
      { label: "Fleet size", value: "400+" },
    ],
    stack: ["React", "Node.js", "Mapbox", "Redis"],
    liveUrl: "https://logistics.example.com",
  },
  {
    slug: "foodieapp",
    title: "FoodieApp",
    category: "Consumer",
    tagline: "Mobile ordering with mobile money.",
    challenge:
      "Local restaurants lacked accessible and affordable digital ordering systems, relying heavily on walk-ins and phone orders. Limited internet reliability and lack of payment integration further reduced their ability to scale and serve modern customers effectively.",
    solution:
      "We built a mobile-first ordering platform designed for low-connectivity environments, featuring offline-capable carts, seamless mobile money integration, and a lightweight merchant dashboard. The system enables restaurants to manage orders, track performance, and expand their customer reach without requiring complex infrastructure.",
    impact: [
      { label: "Merchants", value: "150+" },
      { label: "Avg checkout", value: "9s" },
      { label: "Retention", value: "62%" },
    ],
    stack: ["React Native", "Supabase", "Stripe"],
    liveUrl: "https://foodieapp.example.com",
  },
  {
    slug: "ai-deepfake-detector",
    title: "AI Deepfake Detector",
    category: "Security",
    tagline: "Media authenticity at publication speed.",
    challenge:
      "Newsrooms and digital media platforms struggled to verify the authenticity of images and videos quickly enough, increasing the risk of publishing manipulated or misleading content and damaging public trust.",
    solution:
      "We developed an AI-powered detection system combining deep learning models and a streamlined review interface. The platform allows journalists to upload media, receive authenticity scores instantly, and review flagged content through an intuitive dashboard integrated into existing editorial workflows.",
    impact: [
      { label: "Accuracy", value: "94%" },
      { label: "Review time", value: "-70%" },
      { label: "Partners", value: "6" },
    ],
    stack: ["Python", "PyTorch", "FastAPI"],
    liveUrl: "https://deepfake-ai.example.com",
  },
  {
    slug: "healguard-ai",
    title: "HealGuard AI",
    category: "Healthcare",
    tagline: "Triage support for rural clinics.",
    challenge:
      "Rural clinics often lacked real-time triage support and decision-making tools, leading to delayed identification of critical cases and increased pressure on limited healthcare staff.",
    solution:
      "We created an AI-assisted triage system that analyzes patient symptoms and risk factors to surface critical alerts within seconds. Built with offline-first capabilities, the system ensures reliability in low-connectivity environments while enabling clinicians to prioritize and manage cases more effectively.",
    impact: [
      { label: "Triage time", value: "-55%" },
      { label: "Clinics", value: "24" },
      { label: "Patients/mo", value: "8K+" },
    ],
    stack: ["TypeScript", "LangChain", "Postgres"],
    liveUrl: "https://healguard.example.com",
  },
  {
    slug: "agrilink-rwanda",
    title: "AgriLink Rwanda",
    category: "AgriTech",
    tagline: "A marketplace for smallholder farmers.",
    challenge:
      "Smallholder farmers lacked access to fair market pricing, verified buyers, and transparent trading systems, often relying on intermediaries who reduced their earnings and limited market reach.",
    solution:
      "We built a digital marketplace connecting farmers, cooperatives, and verified buyers through a mobile and SMS-first platform. The system enables price transparency, direct transactions, and improved market access, even for users without smartphones.",
    impact: [
      { label: "Farmers", value: "3,200+" },
      { label: "Avg price lift", value: "+18%" },
      { label: "Cooperatives", value: "46" },
    ],
    stack: ["Next.js", "Prisma", "Twilio"],
    liveUrl: "https://agrilink.rw",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "engineering-for-african-infrastructure",
    title: "Engineering for African infrastructure",
    excerpt:
      "What it means to ship software that survives patchy connectivity, mixed devices, and real operating conditions.",
    date: "2026-03-10",
    readTime: "6 min",
    tag: "Engineering",
    image: "/blog-greenafrica.png",
    body: [
      "African operating conditions are not edge cases — they are the baseline. Software that works here works everywhere.",
      "We build offline-first where reasonable, treat bandwidth as a budget, and measure performance on the devices our users actually carry.",
      "That mindset shapes our Services practice and how our Academy teaches production-grade engineering.",
    ],
  },
  {
    slug: "what-we-learned-training-500-engineers",
    title: "What we learned training 500+ engineers",
    excerpt:
      "Lessons from four cohorts of the IshConnect Academy — curriculum, mentorship, and measurable outcomes.",
    date: "2026-02-02",
    readTime: "7 min",
    tag: "Academy",
    image: "/blog-academy.png",
    body: [
      "Small cohorts outperform large classrooms when the goal is production capability, not credentials.",
      "Mentorship from practicing engineers matters more than any single framework or stack.",
      "Graduates who ship real projects during the program are the ones who land roles and stay in roles.",
    ],
  },
  {
    slug: "case-studies-are-the-product",
    title: "Case studies are the product",
    excerpt:
      "Why we treat every client engagement as a rigorous, publishable case study — and what goes into one.",
    date: "2026-01-14",
    readTime: "5 min",
    tag: "Studio",
    image: "/blog-ikibina.jpeg",
    body: [
      "A case study forces clarity: the problem, the decisions, the outcomes, and the trade-offs.",
      "We capture metrics from week one so impact is measurable, not anecdotal.",
      "This discipline compounds — each project makes the next one sharper.",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((bp) => bp.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((bp) => bp.slug);
}
