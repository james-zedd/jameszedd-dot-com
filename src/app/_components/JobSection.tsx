type JobSectionProps = {
  id: string;
  role: string;
  company: string;
  location: string;
  companyType: string;
  period: string;
  highlights: string[];
  responsibilities: string[];
  technologies: string[];
};

export default function JobSection({
  id,
  role,
  company,
  location,
  companyType,
  period,
  highlights,
  responsibilities,
  technologies,
}: JobSectionProps) {
  return (
    <div id={id} className="w-full mt-8 xl:w-1/2">
      <div className="flex flex-col gap-1 xs:flex-row xs:items-baseline xs:justify-between xs:gap-4">
        <h2>{role}</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{period}</p>
      </div>
      <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
        {company} · {location} · {companyType}
      </p>

      <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Highlights
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Responsibilities
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>

      <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Technologies &amp; Tools
      </h3>
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
  );
}
