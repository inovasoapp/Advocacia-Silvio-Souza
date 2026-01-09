import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen xl:h-[920px] bg-blue-50 bg-[url('/Hero-mobile.webp')] md:bg-[url('/Hero-tablet.webp')] lg:bg-[url('/Hero.webp')] bg-cover bg-center bg-no-repeat">
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-60 lg:mt-20">
          <div className="flex flex-col justify-center h-full flex-1 ">
            <Image
              src="/logo-blue.svg"
              alt="Logo Advocacia Silvio Souza"
              width={200}
              height={44}
              priority
            />

            <h1 className="text-[1.75rem] lg:text-[2.5rem] font-bold text-zinc-800 mt-6">
              Advocacia em Americana com orientação jurídica sólida e confiável.
            </h1>

            <p className="text-lg lg:text-xl mt-2 text-zinc-600">
              Atendimento próximo e estratégico, com análise detalhada do seu
              caso e comunicação clara em cada etapa.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8 mt-8">
              <button className="flex w-full lg:w-auto items-center justify-center gap-2 bg-[#374282] px-12 py-4 text-white rounded-md cursor-pointer hover:brightness-125 transition-all duration-300 ">
                <Calendar size={32} strokeWidth={1} className="" />
                Agendar atendimento
              </button>

              <div className="flex w-full lg:w-auto items-center justify-center gap-3">
                <Clock size={20} strokeWidth={1} className="text-zinc-500" />
                <p className="text-zinc-500 font-light text-xs md:text-sm">
                  Segunda / Terça / Quinta: 8h às 16:30h
                  <br />
                  Quarta e Sexta: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
