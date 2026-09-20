import PortfolioCard from "./PortfolioCard";
import { projects } from "@/app/_data/Portfolio";

export default function Portfolio() {
  const oddNumber: boolean = projects.length % 2 !== 0;

  return (
    <section id="portfolio" className="pb-16">
      <h1 className="text-2xl font-medium">Portfolio Projects</h1>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <PortfolioCard
            key={project.name}
            isOddAndLast={oddNumber && projects.indexOf(project) === projects.length - 1}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
