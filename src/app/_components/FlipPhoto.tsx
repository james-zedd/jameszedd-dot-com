"use client";

import Image from "next/image";

type FlipPhotoProps = {
  frontSrc: string;
  frontAlt: string;
  backSrc: string;
  backAlt: string;
  onFlip?: () => void;
};

export default function FlipPhoto({
  frontSrc,
  frontAlt,
  backSrc,
  backAlt,
  onFlip,
}: FlipPhotoProps) {
  function flipPhoto() {
    document.getElementById("intro-photo")?.classList.toggle("rotate-y-180");
    onFlip?.();
  }

  return (
    <div className="mx-auto w-full max-w-[300px] [perspective:1200px] md:max-w-[400px] lg:max-w-[500px]">
      <div
        id="intro-photo"
        className="relative aspect-square w-full transform-3d transition-transform duration-700 ease-in-out cursor-pointer"
        onClick={flipPhoto}
      >
        <Image
          src={frontSrc}
          alt={frontAlt}
          width={1000}
          height={1000}
          className="absolute inset-0 h-full w-full rounded-full object-cover backface-hidden"
        />
        <Image
          src={backSrc}
          alt={backAlt}
          width={1000}
          height={1000}
          className="absolute inset-0 h-full w-full rounded-full object-cover backface-hidden rotate-y-180"
        />
      </div>
    </div>
  );
}
