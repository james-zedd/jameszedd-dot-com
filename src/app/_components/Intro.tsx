import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="py-16">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col justify-center align-centergap-6">
          <h1 className="mb-6">Hi, I&apos;m James</h1>
          <h2>
            Front-End Engineer with 6+ years building production-ready React and TypeScript applications. Also experienced with React Native, Expo, leading development independently, reporting directly to senior stakeholders, and owning products from architecture to App Store release.
          </h2>
        </div>
        <div className="flex flex-column w-full justify-center align-center">
          <Image
            src="/images/lasagne-photo__1080x1081.jpg"
            alt="James Zedd"
            width={700}
            height={700}
            className="rounded-full p-2"
          />
        </div>
      </div>
    </section>
  );
}
