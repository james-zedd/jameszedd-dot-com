import JobSection from "./JobSection";

const highlights = [
  "Built AWS Lambda functions integrated with API Gateway for third-party user authentication.",
  "Updated message-oriented middleware to relay user activity data to a client's API endpoint.",
];

const responsibilities = [
  "Created and maintained web-based UIs using HTML5, CSS3, and JavaScript.",
  "Developed additional features for SPA LMS software.",
  "Participated in code reviews and collaborative solution brainstorming.",
  "Managed deployments and ongoing maintenance of the team development server.",
  "Coached and mentored new team members on best practices and working agreements.",
  "Led Agile ceremonies: sprint planning, daily SCRUM, backlog refinement, and retrospectives.",
];

const technologies = [
  "JavaScript",
  "Ember.js",
  "jQuery",
  "CSS3 / SASS",
  "PHP",
  "Docker",
  "WSL",
  "Git / Bitbucket",
  "JIRA",
  "Confluence",
];

export default function CareerHalight() {
  return (
    <JobSection
      id="career-halight"
      role="Software Developer & Team Lead"
      company="Halight Inc."
      location="Hybrid Position"
      period="2019 – 2023"
      highlights={highlights}
      responsibilities={responsibilities}
      technologies={technologies}
    />
  );
}
