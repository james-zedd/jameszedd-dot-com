import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="py-16">
      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col justify-center align-center w-full">
          <h1 className="mb-6">Hi, I&apos;m James</h1>
          <h2>
            Front-End Engineer with 6+ years building production-ready React and TypeScript applications. Also experienced with React Native, Expo, leading development independently, reporting directly to senior stakeholders, and owning products from architecture to App Store release.
          </h2>
        </div>
        <div className="flex flex-column w-full justify-center align-center">
          <div className="mx-auto w-full rounded-full overflow-hidden max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
            <Image
              src="/images/lasagne-photo__732x732.jpg"
              // src="/images/james_zedd__iaido.jpg"
              alt="James Zedd"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
