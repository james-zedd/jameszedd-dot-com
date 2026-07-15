type PortfolioCardProps = {
  name: string;
  description: string;
  technologies: string;
  githubLink?: string;
  webLink?: string;
};

export default function PortfolioCard({
  name,
  description,
  technologies,
  githubLink,
  webLink,
}: PortfolioCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
      <div className="flex-1">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{description}</p>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Technologies Used: {technologies}
        </p>
      </div>
      <div className="mt-6 flex">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            View on Github
          </a>
        )}
        {webLink && (
          <a
            href={webLink}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            View in Browser
          </a>
        )}
      </div>
    </div>
  );
}
