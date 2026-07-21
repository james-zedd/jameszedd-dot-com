import PortfolioCard from "./PortfolioCard";
import { projects } from "@/app/_data/Portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <h1 className="text-2xl font-medium">Portfolio Projects</h1>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <PortfolioCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
