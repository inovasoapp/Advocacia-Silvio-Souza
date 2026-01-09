import { Hero } from "./components/hero/hero";
import { Cards } from "./components/cards";
import { ProcessTimeline } from "./components/processTimeLine";
import { About } from "./components/about";
import { Specializations } from "./components/specializations";
import { Faq } from "./components/faq";
import { AddressAndContact } from "./components/anddress-and-contact";
import { Footer } from "./components/footer";
import { CTA } from "./components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advocacia | Silvio Souza",
  description:
    "Procurando por Advocacia em Americana? Silvio Souza oferece orientação jurídica experiente e estratégica. Agende uma consulta hoje mesmo.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-background">
      <Hero />
      <Cards />
      <About />
      <Specializations />
      <CTA />
      <ProcessTimeline />
      <Faq />
      <AddressAndContact />
      <Footer />
    </main>
  );
}
