import Link from "next/link";
import Image from "next/image";

export function About() {
  return (
    <section className="py-8 lg:py-20">
      <div className="container-section flex flex-col lg:flex lg:flex-row items-center gap-20">
        <div className="relative flex-none max-w-[460px] w-full h-[600px] px-4 lg:px-0">
          <div className="w-full h-full border-6 border-[#374282] rounded-tr-[50px] -translate-y-5 translate-x-5" />

          <div className="absolute top-0 left-0 z-10 w-full h-full bg-blue-50 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
            <Image
              src="/Silvio-sentado-pedra.webp"
              alt="Silvio Souza"
              width={460}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-500 font-light text-sm">Conheça</span>
          <h2 className="text-[2rem] font-bold text-zinc-700">
            Dr. Silvio Antonio de Souza
          </h2>
          <span className="text-zinc-500 font-light text-base">
            OAB/SP: <strong className="font-bold">261.809 - </strong>{" "}
            <Link
              href="https://cna.oab.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Verificar no CNA
            </Link>
            <span className="text-sm">(Cadastro Nacional dos Advogados)</span>
          </span>
          <p className="text-zinc-500 text-base mt-10">
            Formado em Direito pela UNIMEP – Piracicaba,{" "}
            <strong>atua na área jurídica há mais de 15 anos</strong>. Ao longo
            de sua trajetória, construiu uma atuação pautada pela ética,
            responsabilidade e compromisso com a justiça.
          </p>
          <p className="text-zinc-500 text-base mt-4">
            A escolha pelo Direito nasceu do desejo de contribuir para uma{" "}
            <strong> sociedade mais justa</strong>, enfrentando injustiças com
            seriedade e dedicação. Acredita que a advocacia vai além da
            aplicação da lei, sendo um instrumento essencial para orientar,
            proteger direitos e oferecer segurança jurídica às pessoas.
          </p>
        </div>
      </div>
    </section>
  );
}
