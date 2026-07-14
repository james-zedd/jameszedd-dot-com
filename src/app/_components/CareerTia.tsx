import JobSection from "./JobSection";

const highlights = [
  "Lead Mobile Developer — owned the full product lifecycle of the TIA Closeout and Warranty app, from architecture through App Store deployment.",
  "Engineered high-performance frontend systems with React.js, Next.js, TypeScript, and modern CSS frameworks.",
  "Transformed complex Figma prototypes into fully responsive production code.",
  "Leveraged Anthropic Claude to accelerate problem-solving, codebase refactoring, and time-to-resolution.",
];

const responsibilities = [
  "Directed end-to-end management of specialized PDI (Pre-Delivery Inspection) software for industry professionals.",
  "Translated client feedback into technical requirements and implemented custom features to resolve user pain points.",
  "Managed the full deployment pipeline — production server updates, rapid-response bug fixes, and system stability.",
  "Developed and presented bi-weekly strategic roadmaps on code goals and long-term technical direction.",
  "Primary technical point of contact reporting to the Principal, Partners, and CTO on milestones and growth strategy.",
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "React Native",
  "TypeScript",
  "Xcode",
  "Android Studio",
  "Git / GitHub",
  "JIRA",
  "WSL",
];

export default function CareerTia() {
  return (
    <JobSection
      id="career-tia"
      role="Front-End Developer"
      company="The Interactive Abode Inc."
      location="Remote Position"
      period="2023 – 2026"
      highlights={highlights}
      responsibilities={responsibilities}
      technologies={technologies}
    />
  );
}
