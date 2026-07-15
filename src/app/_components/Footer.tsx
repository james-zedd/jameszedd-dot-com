export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <p>
        &copy; {new Date().getFullYear()} Zedd Enterprises. All rights
        reserved.
      </p>
      <p className="mt-1">
        View this Next.js app on{" "}
        <a
          href="https://github.com/james-zedd/jameszedd-dot-com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-zinc-700 dark:hover:text-zinc-200"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
