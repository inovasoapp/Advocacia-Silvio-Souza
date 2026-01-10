export const dynamic = "force-static";

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
  keywords: [
    "Advocacia",
    "Silvio Souza",
    "Advocacia em Americana, Direito Civil, Direito Trabalhista, Direito Previdenciário",
  ],
  openGraph: {
    title: "Advocacia | Silvio Souza",
    description:
      "Procurando por Advocacia em Americana? Silvio Souza oferece orientação jurídica experiente e estratégica. Agende uma consulta hoje mesmo.",
    type: "website",
    locale: "pt_BR",
    siteName: "Advocacia | Silvio Souza",
    images: [
      {
        url: "https://www.advocaciasilviosouza.com.br/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Advocacia | Silvio Souza",
      },
    ],
  },
  twitter: {
    title: "Advocacia | Silvio Souza",
    description:
      "Procurando por Advocacia em Americana? Silvio Souza oferece orientação jurídica experiente e estratégica. Agende uma consulta hoje mesmo.",
    card: "summary_large_image",
    images: [
      {
        url: "https://www.advocaciasilviosouza.com.br/og-x.webp",
        width: 1200,
        height: 600,
        alt: "Advocacia | Silvio Souza",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.advocaciasilviosouza.com.br/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Advocacia | Silvio Souza",
    description:
      "Procurando por Advocacia em Americana? Silvio Souza oferece orientação jurídica experiente e estratégica. Agende uma consulta hoje mesmo.",
    url: "https://www.advocaciasilviosouza.com.br/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.advocaciasilviosouza.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
