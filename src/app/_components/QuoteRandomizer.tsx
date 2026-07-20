"use client";

import { useState } from "react";

type Quote = { quote: string; author: string };

type QuoteRandomizerProps = {
    quotes: Quote[];
};

function shuffle(items: Quote[]): Quote[] {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function QuoteRandomizer({ quotes }: QuoteRandomizerProps) {
    const [shuffledQuotes] = useState(() => shuffle(quotes));
    const [currentQuote, setCurrentQuote] = useState<number | null>(null);

    function showNextQuote() {
        setCurrentQuote((prev) =>
            prev === null ? 0 : (prev + 1) % shuffledQuotes.length
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
            <button
                type="button"
                onClick={showNextQuote}
                className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
                Read some of my favorite quotes
            </button>
            <div
                className={`max-w-lg overflow-y-auto text-center transition-[height] duration-500 ease-in-out lg:text-left ${
                    currentQuote !== null ? "h-[150px]" : "h-0"
                }`}
            >
                {currentQuote !== null && (
                    <>
                        <p className="font-serif text-lg font-light italic text-gray-800 dark:text-gray-200">{shuffledQuotes[currentQuote].quote}</p>
                        <p className="font-serif font-light italic mt-2 text-sm text-gray-600 dark:text-gray-400">— {shuffledQuotes[currentQuote].author}</p>
                    </>
                )}
            </div>
        </div>
    );
}
