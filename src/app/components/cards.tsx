import Image from "next/image";

export function Cards() {
  return (
    <section className="lg:-mt-28 pb-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="shadow-lg flex flex-col md:flex-row justify-center overflow-hidden rounded-2xl bg-background">
            <div className="flex flex-col items-center bg-background w-full md:w-80 h-auto md:h-96 px-4 py-8 border border-zinc-200">
              <Image
                src="/regulation-edit.svg"
                alt="Scale Edit"
                width={64}
                height={64}
                className="mt-0 md:mt-8"
              />
              <h2 className="mt-6 md:mt-8 text-2xl font-bold text-zinc-700 text-center">
                Direito Civil
              </h2>
              <p className="mt-4 text-lg text-zinc-500 text-center">
                Atuação estratégica em contratos, família e patrimônio, com foco
                na proteção dos seus direitos e soluções seguras
              </p>
            </div>
            <div className="flex flex-col items-center bg-background w-full md:w-80 h-auto md:h-96 px-4 py-8 border border-zinc-200 border-t-0 md:border-t md:border-l-0">
              <Image
                src="/labour-edit.svg"
                alt="Briefcase Edit"
                width={64}
                height={64}
                className="mt-0 md:mt-8"
              />
              <h2 className="mt-6 md:mt-8 text-2xl font-bold text-zinc-700 text-center">
                Direito Trabalhista
              </h2>
              <p className="mt-4 text-lg text-zinc-500 text-center">
                Defesa técnica e responsável em questões trabalhistas, como
                horas extras, verbas rescisórias, FGTS e demissões
              </p>
            </div>
            <div className="flex flex-col items-center bg-background w-full md:w-80 h-auto md:h-96 px-4 py-8 border border-zinc-200 border-t-0 md:border-t md:border-l-0">
              <Image
                src="/old-people-edit.svg"
                alt="Old People Edit"
                width={64}
                height={64}
                className="mt-0 md:mt-8"
              />
              <h2 className="mt-6 md:mt-8 text-2xl font-bold text-zinc-700 text-center">
                Direito Previdenciário
              </h2>
              <p className="mt-4 text-lg text-zinc-500 text-center">
                Assessoria especializada em benefícios do INSS, aposentadorias,
                pensões e revisões previdenciárias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
