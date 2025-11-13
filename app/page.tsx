import Erekshelikter from "./components/Erekshelikter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TarbieshiQuraldar from "./components/TarbieshiQuraldar";
import WhyUstaz from "./components/WhyUstaz";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUstaz />
      <TarbieshiQuraldar />
      <Erekshelikter />

    </main>
  );
}
