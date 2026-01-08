"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 lg:justify-between">
        <Image
          src="/logo-blue.svg"
          alt="Silvio Souza Advocacia"
          width={200}
          height={44}
          className="h-10 w-auto md:h-12"
          priority
        />

        <p className="text-center text-sm md:text-base text-zinc-500 font-light">
          &copy; {currentYear} Silvio Souza Advocacia. Todos os direitos
          reservados.
        </p>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-zinc-500 hover:text-blue-900 transition-colors duration-300"
        >
          <span className="text-sm font-light cursor-pointer">
            Voltar para o topo
          </span>
          <div className="p-2 rounded-full border border-zinc-200 group-hover:border-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  );
}
