import { iconPaths, type IconKey } from "@/app/_data/icons";

type PortfolioCardProps = {
  name: string;
  description: string;
  technologies: string[];
  linkOneUrl?: string;
  linkTwoUrl?: string;
  linkOneText?: string;
  linkTwoText?: string;
  linkOneIcon?: IconKey;
  linkTwoIcon?: IconKey;
};

function Icon({ type }: { type: IconKey }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <path
        fillRule={type === "external" ? "evenodd" : undefined}
        clipRule={type === "external" ? "evenodd" : undefined}
        d={iconPaths[type]}
      />
    </svg>
  );
}

export default function PortfolioCard({
  name,
  description,
  technologies,
  linkOneUrl,
  linkTwoUrl,
  linkOneText = "GitHub",
  linkTwoText = "Live Site",
  linkOneIcon = "github",
  linkTwoIcon = "external",
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
      <div className="flex flex-col mlg:flex-row mlg:flex-wrap gap-3">
        {linkOneUrl && (
          <a
            href={linkOneUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center min-w-[135px] gap-2 whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-normal text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            <Icon type={linkOneIcon} />
            {linkOneText}
          </a>
        )}
        {linkTwoUrl && (
          <a
            href={linkTwoUrl}
            target="_blank"
            rel="noreferrer"
            className="mlg:ml-auto inline-flex justify-center items-center min-w-[135px] gap-2 whitespace-nowrap rounded-md border-2 border-zinc-900 px-4 py-2 text-sm font-normal text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-zinc-50 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
          >
            <Icon type={linkTwoIcon} />
            {linkTwoText}
          </a>
        )}
      </div>
    </div>
  );
}
