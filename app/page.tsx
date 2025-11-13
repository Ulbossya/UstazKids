import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import WhyUstaz from "./components/WhyUstaz";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUstaz />
      <Team />
    </main>
  );
}
