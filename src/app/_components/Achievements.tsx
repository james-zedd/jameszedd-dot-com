type CredentialItem = {
  title: string;
  issuer: string;
  date: string;
};

const certifications: CredentialItem[] = [
  {
    title: "Bash Scripting and Shell Programming",
    issuer: "Udemy (udemy.com)",
    date: "June 2025",
  },
  {
    title: "Python — The Practical Guide",
    issuer: "Udemy (udemy.com)",
    date: "December 2024",
  },
  {
    title: "Front-End Expert Certification",
    issuer: "AlgoExpert (algoexpert.io)",
    date: "January 2023",
  },
];

const achievements: CredentialItem[] = [
  {
    title: "Fourth Degree Black Belt (Yondan) in Yoshinkan Aikido",
    issuer: "Chudokai Aikido Federation International",
    date: "June 2026",
  },
  {
    title: "Second Degree Black Belt (Nidan) in Iaido",
    issuer: "International Iai Tate-Do Federation",
    date: "December 2025",
  },
];

function CredentialList({ items }: { items: CredentialItem[] }) {
  return (
    <ul className="mt-3 space-y-4">
      {items.map((item) => (
        <li key={item.title}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="text-zinc-700 dark:text-zinc-300">{item.title}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {item.date}
            </p>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {item.issuer}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <h1 className="text-2xl font-medium">Certifications &amp; Achievements</h1>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
        <div className="w-full md:w-1/2">
          <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Certifications
          </h3>
          <CredentialList items={certifications} />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Achievements
          </h3>
          <CredentialList items={achievements} />
        </div>
      </div>
    </section>
  );
}
