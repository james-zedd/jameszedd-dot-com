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
        <span className="inline-block mt-3 font-thin text-sm">Technologies Used:</span>
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
      <hr className="my-6 border-zinc-300 dark:border-zinc-700" />
      <div className="flex gap-3">
        {linkOneUrl && (
          <a
            href={linkOneUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {linkOneText}
          </a>
        )}
        {linkTwoUrl && (
          <a
            href={linkTwoUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-md border-2 border-zinc-900 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-zinc-50 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
          >
            {linkTwoText}
          </a>
        )}
      </div>
    </div>
  );
}
