"use client";

const TEXT_DELAY = 20; // Delay in milliseconds between each character

import { useState, useEffect } from "react";
import { TEXT_A, TEXT_B } from "@/app/_data/Intro";

type IntroTextProps = {
    showTextB?: boolean;
};

async function typeText(
    text: string,
    delay: number,
    isCancelled: () => boolean,
    onChar: (char: string) => void
) {
    for (const char of text) {
        if (char === "|") {
            onChar("\n\n");
            await new Promise((resolve) => setTimeout(resolve, delay * 60));
            if (isCancelled()) return;
        } else {
            await new Promise((resolve) => setTimeout(resolve, delay));
            if (isCancelled()) return;
            onChar(char);
        }
    }
}

export default function IntroTextText({ showTextB = false }: IntroTextProps) {

    const [renderedText, setRenderedText] = useState("");
    const [isTextADone, setIsTextADone] = useState(false);

    useEffect(() => {
        let cancelled = false;

        typeText(TEXT_A, TEXT_DELAY, () => cancelled, (char) =>
            setRenderedText((prev) => prev + char)
        ).then(() => {
            if (!cancelled) setIsTextADone(true);
        });

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!showTextB || !isTextADone) return;

        let cancelled = false;

        typeText("\n\n" + TEXT_B, TEXT_DELAY, () => cancelled, (char) =>
            setRenderedText((prev) => prev + char)
        );

        return () => {
            cancelled = true;
        };
    }, [showTextB, isTextADone]);

  const paragraphs = renderedText.split("\n\n");

  return (
    <div className="intro-terminal">
      <div className="intro-terminal-header">
        <span className="intro-terminal-dot intro-terminal-dot-red"></span>
        <span className="intro-terminal-dot intro-terminal-dot-yellow"></span>
        <span className="intro-terminal-dot intro-terminal-dot-green"></span>
        <span className="intro-terminal-title">james@portfolio: ~</span>
      </div>
      <div className="intro-text">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>
            {paragraph}
            {i === paragraphs.length - 1 && (
              <span className="w-2 h-3 md:w-3 md:h-4 bg-white inline-block ml-1 animate-toggle-blink"></span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}