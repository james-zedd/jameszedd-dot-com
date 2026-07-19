"use client";

import { useState } from "react";
import FlipPhoto from "./FlipPhoto";
import IntroText from "./IntroText";

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
          <FlipPhoto
            frontSrc="/images/lasagne-photo__732x732.jpg"
            frontAlt="James Zedd Programmer"
            backSrc="/images/james_zedd__iaido.jpg"
            backAlt="James Zedd Budoka"
            onFlip={() => setHasFlipped(true)}
          />
        </div>
      </div>
    </section>
  );
}
