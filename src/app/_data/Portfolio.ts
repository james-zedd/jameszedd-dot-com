export type Project = {
    name: string;
    description: string;
    technologies: string[];
    linkOneUrl?: string;
    linkTwoUrl?: string;
    linkOneText?: string;
    linkTwoText?: string;
};

export const projects: Project[] = [
    {
        name: "CAFI Student Portal Mobile Application",
        description: "A mobile application for the CAFI Student Portal. Includes a news feed, questions quiz, technique randomizer, and more.",
        technologies: ["React Native", "Expo", "Expo Apple Authentication", "React Native Google Sign In"],
        linkOneUrl: "https://apps.apple.com/us/app/cafi-student-portal/id6760269554",
        linkTwoUrl: "https://play.google.com/store/apps/details?id=com.zeddenterprises.cafistudentportalmobile&hl=en_CA",
        linkOneText: "View on App Store",
        linkTwoText: "View on Google Play",
    },
    {
        name: "CAFI Student Portal Administration Application",
        description:
            "An admin panel for the Chudokai Aikido Federation International",
        technologies: ["Next.js", "React.js", "Tailwind CSS", "Vercel", "TypeScript"],
        linkOneUrl: "https://github.com/james-zedd/cafi-student-portal-admin",
        linkTwoUrl: "https://admin.chudokaiaikidofederationinternational.org/",
    },
    {
        name: "CAFI Student Portal Node JS Server",
        description: "Node JS server for the CAFI Student Portal",
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
        linkOneUrl: "https://github.com/james-zedd/cafi-student-portal--130245840986",
    },
    {
        name: "Github Finder 2022",
        description: "React App for Finding Github Users",
        technologies: ["React.js", "Tailwind CSS", "GitHub API"],
        linkOneUrl: "https://github.com/james-zedd/github-finder-2022",
        linkTwoUrl: "https://github-finder-2022-chi.vercel.app/",
    }
];
