export type Job = {
    role: string;
    company: string;
    location: string;
    companyType: string;
    period: string;
    highlights: string[];
    responsibilities: string[];
    technologies: string[];
};

export const tiaJob: Job = {
    role: "Front-End Developer and Lead Mobile Developer",
    company: "The Interactive Abode Inc.",
    location: "Remote Position",
    companyType: "SaaS Company",
    period: "2023 – 2026",
    highlights: [
        "Owned the TIA Closeout and Warranty app post-handoff, self-directing a fast learning curve in React Native and Expo with no prior experience in either.",
        "Managed ongoing mobile app development, including code updates, Expo SDK upgrades, and uploading production-ready build packages to the Apple App Store and Google Play.",
        "Engineered high-performance front-end systems with React.js, Next.js, TypeScript, and modern CSS frameworks.",
        "Transformed complex Figma prototypes into fully responsive production code.",
        "Leveraged AI workflows using Claude code to accelerate problem-solving, codebase refactoring, and time-to-resolution.",
    ],
    responsibilities: [
        "Maintained a shared SaaS codebase across multiple client Firebase instances, keeping each client's database and build up to date.",
        "Provided on-site training and phone-based technical support for PDI (Pre-Delivery Inspection) software users, helping non-technical reps adopt and troubleshoot the platform.",
        "Translated client feedback into technical requirements and implemented custom features to resolve user pain points.",
        "Managed the full deployment pipeline — production server updates, rapid-response bug fixes, and system stability.",
        "Developed and presented weekly strategic roadmaps on code goals and long-term technical direction.",
    ],
    technologies: [
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
    ],
};

export const halightJob: Job = {
    role: "Software Developer and Team Lead",
    company: "Halight Inc.",
    location: "Hybrid Position",
    companyType: "LMS Company",
    period: "2019 – 2023",
    highlights: [
        "Built AWS Lambda functions integrated with API Gateway for third-party user authentication.",
        "Updated message-oriented middleware to relay user activity data to a client's API endpoint.",
        "Directed daily SCRUM stand-ups for an international remote team (APAC-based developers), coordinating priorities with the product owners across a multi-timezone workflow.",
        "Broke down high-level Epics into actionable Stories and facilitated Fibonacci point estimation with the development team during sprint planning.",
    ],
    responsibilities: [
        "Created and maintained web-based UIs using HTML5, CSS3, and JavaScript.",
        "Developed additional features for SPA LMS software.",
        "Participated in code reviews and collaborative solution brainstorming.",
        "Managed deployments and ongoing maintenance of the team development server.",
        "Coached and mentored new team members on best practices and working agreements.",
    ],
    technologies: [
        "JavaScript",
        "Ember.js",
        "jQuery",
        "CSS3 / SASS",
        "PHP",
        "WSL",
        "Git / Bitbucket",
        "JIRA",
        "Confluence",
    ],
};
