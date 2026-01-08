import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen xl:h-[920px] bg-blue-50 bg-[url('/Hero.webp')] bg-cover bg-center">
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-56 lg:mt-20">
          <div className="flex flex-col justify-center h-full flex-1 ">
            <Image
              src="/logo-blue.svg" // Caminho direto da pasta public
              alt="Logo do Escritório"
              width={200}
              height={44}
              // className="w-64 h-16 lg:w-72 lg:h-20" // Responsivo com Tailwind
              priority // Carrega imediatamente para logo
            />

            <h1 className="text-[1.5rem] lg:text-[2rem] font-bold text-zinc-800 mt-2">
              Orientação jurídica objetiva para que você tome decisões seguras
              desde o primeiro atendimento.
            </h1>

            <p className="text-lg lg:text-xl mt-2 text-zinc-600">
              Oferecemos um atendimento jurídico personalizado, com análise
              cuidadosa do seu caso, linguagem acessível e estratégias bem
              definidas para evitar riscos e garantir decisões conscientes.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-8">
              <button className="flex w-full lg:w-auto items-center justify-center gap-2 bg-[#374282] px-12 py-3 text-white rounded-md cursor-pointer hover:brightness-125 transition-all duration-300 ">
                <Calendar size={20} strokeWidth={1} className="" />
                Agendar atendimento
              </button>

              <div className="flex w-full lg:w-auto items-center lg:justify-center gap-3">
                <Clock size={20} strokeWidth={1} className="" />
                <span className="text-zinc-600 font-light text-sm">
                  Atendimento de segunda a sexta,
                  <br className="hidden lg:block" /> das 8h às 16h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
