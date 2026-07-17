import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    name: "CAFI Student Portal",
    description:
      "A student resource application built for the Chudokai Aikido Federation International",
    technologies: "Node JS, Express JS, React JS, Mongo DB, AWS EC2",
    githubLink: "https://github.com/james-zedd/cafi-student-portal--130245840986",
    webLink: "https://portal.chudokaiaikidofederationinternational.org/",
  },
  {
    name: "House Marketplace Application",
    description: "React/Firebase app for property listings",
    technologies: "React JS, Firebase for database and user authentication",
    githubLink: "https://github.com/james-zedd/housing-marketplace-app-49389250",
    webLink: "https://housing-marketplace-app-49389250.vercel.app/",
  },
  {
    name: "Github Finder 2022",
    description: "React App for Finding Github Users",
    technologies: "React JS, Tailwind CSS, Github API",
    githubLink: "https://github.com/james-zedd/github-finder-2022",
    webLink: "https://github-finder-2022-chi.vercel.app/",
  },
  {
    name: "Robyn Zedd Design",
    description: "Custom Graphic Design Portfolio",
    technologies: "React JS, Javascript",
    githubLink: "https://github.com/james-zedd/robyn-zedd-portfolio-6549818961",
    webLink: "http://robynzedddesign.com/",
  },
  {
    name: "Github Finder",
    description: "React App for Github",
    technologies: "React JS, Javascript, GitHub API",
    githubLink: "https://github.com/james-zedd/github-finder-react",
    webLink: "https://eager-williams-ee7a0c.netlify.com/",
  },
  {
    name: "Client Panel",
    description: "Angular/Firebase Application",
    technologies: "Angular, Angular CLI, Firebase, Typescript",
    githubLink: "https://github.com/james-zedd/client-panel-0984543",
    webLink: "https://clientpanelprod-a1012.firebaseapp.com/login",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <h1 className="text-2xl font-medium">Portfolio Projects</h1>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <PortfolioCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
