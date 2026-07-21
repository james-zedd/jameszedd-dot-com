// import Quotes from "./_components/Quotes"; // paused: revisit audience fit later
import Intro from "./_components/Intro";
import ProfessionalExperience from "./_components/ProfessionalExperience";
import Achievements from "./_components/Achievements";
import Portfolio from "./_components/Portfolio";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <main className="mx-auto w-full flex-1 px-6 md:px-12 3xl:max-w-[120rem] 3xl:px-24">
      {/* <Quotes /> */}
      <Intro />
      <ProfessionalExperience />
      <Achievements />
      <Portfolio />
      <Contact />
    </main>
  );
}
