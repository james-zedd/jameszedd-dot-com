type PortfolioCardProps = {
  name: string;
  description: string;
  technologies: string[];
  linkOneUrl?: string;
  linkTwoUrl?: string;
  linkOneText?: string;
  linkTwoText?: string;
};

export default function PortfolioCard({
  name,
  description,
  technologies,
  linkOneUrl,
  linkTwoUrl,
  linkOneText = "View on GitHub",
  linkTwoText = "View in Browser",
}: PortfolioCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
      <div className="flex-1">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-3">
        {linkOneUrl && (
          <a
            href={linkOneUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {linkOneText}
          </a>
        )}
        {linkTwoUrl && (
          <a
            href={linkTwoUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {linkTwoText}
          </a>
        )}
      </div>
    </div>
  );
}
