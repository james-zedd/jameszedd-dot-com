export type Project = {
    name: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    webLink?: string;
};

export const projects: Project[] = [
    {
        name: "CAFI Student Portal Administration Application",
        description:
            "An admin panel for the Chudokai Aikido Federation International",
        technologies: ["next.js", "react.js", "Tailwind CSS", "Vercel", "Typescript"],
        githubLink: "https://github.com/james-zedd/cafi-student-portal-admin",
        webLink: "https://admin.chudokaiaikidofederationinternational.org/",
    },
    {
        name: "CAFI Student Portal Node JS Server",
        description: "Node JS server for the CAFI Student Portal",
        technologies: ["Node JS", "Express JS", "MongoDB", "Mongoose"],
        githubLink: "https://github.com/james-zedd/cafi-student-portal--130245840986",
    },
    {
        name: "Github Finder 2022",
        description: "React App for Finding Github Users",
        technologies: ["React JS", "Tailwind CSS", "Github API"],
        githubLink: "https://github.com/james-zedd/github-finder-2022",
        webLink: "https://github-finder-2022-chi.vercel.app/",
    }
];
