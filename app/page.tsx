import Hero from "./components/Hero";
import Tariffs from "./components/Tariffs";
import Team from "./components/Team";
import WhyUstaz from "./components/WhyUstaz";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUstaz />
      <Team />
      <Tariffs />
    </main>
  );
}
