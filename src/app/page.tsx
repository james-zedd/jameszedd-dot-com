import Intro from "./_components/Intro";
import ExperienceSummary from "./_components/ExperienceSummary";
import CareerTia from "./_components/CareerTia";
import CareerHalight from "./_components/CareerHalight";
import Achievements from "./_components/Achievements";
import Portfolio from "./_components/Portfolio";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6">
      <Intro />
      <ExperienceSummary />
      <CareerTia />
      <CareerHalight />
      <Achievements />
      <Portfolio />
      <Contact />
    </main>
  );
}
