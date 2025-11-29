import Erekshelikter from "./components/Erekshelikter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TarbieshiQuraldar from "./components/TarbieshiQuraldar";
import WhyUstaz from "./components/WhyUstaz";
import Team from "./components/Team";
import Tariffs from "./components/Tariffs";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUstaz />
      <TarbieshiQuraldar />
      <Erekshelikter />
      <Team />
      <Tariffs />
      <Dashboard />

    </main>
  );
}
