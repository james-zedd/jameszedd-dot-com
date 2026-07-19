"use client";

import { useState, useEffect } from "react";

const TEXT_A = "Front-End Engineer with 6+ years building production-ready React and TypeScript applications. Also experienced with React Native, Expo, leading development independently, reporting directly to senior stakeholders, and owning products from architecture to App Store release.";

const TEXT_B = "In addition to my technical skills, I have been a martial arts student for over 17 years, achieving a Fourth Degree Black Belt (Yondan) in Yoshinkan Aikido and a Second Degree Black Belt (Nidan) in Iaido.";

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
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (isCancelled()) return;
        onChar(char);
    }
}

export default function IntroTextText({ showTextB = false }: IntroTextProps) {

    const [renderedText, setRenderedText] = useState("");
    const [isTextADone, setIsTextADone] = useState(false);

    useEffect(() => {
        let cancelled = false;

        typeText(TEXT_A, 50, () => cancelled, (char) =>
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

        typeText(" " + TEXT_B, 50, () => cancelled, (char) =>
            setRenderedText((prev) => prev + char)
        );

        return () => {
            cancelled = true;
        };
    }, [showTextB, isTextADone]);

  return (
    <div>
      <h2>
        {renderedText}
        <span className="w-2 h-4 md:w-3 md:h-5 bg-white inline-block ml-1 animate-toggle-blink"></span>
        </h2> 
    </div>
  );
}