import { socials } from "@/app/_data/Contact";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <ul className="flex justify-center gap-8">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-8 w-8"
              >
                <path d={social.iconPath} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
