"use client";

import { useState } from "react";
import FlipPhoto from "./FlipPhoto";
import IntroText from "./IntroText";
import { introPhoto } from "@/app/_data/Intro";

export default function Intro() {
  const [hasFlipped, setHasFlipped] = useState(false);

  return (
    <section id="intro" className="py-16">
      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col justify-center align-center w-full">
          <h1 className="mb-6">Hi, I&apos;m James</h1>
          <IntroText showTextB={hasFlipped} />
        </div>
        <div className="flex flex-column w-full justify-center align-center">
          <FlipPhoto {...introPhoto} onFlip={() => setHasFlipped(true)} />
        </div>
      </div>
    </section>
  );
}
