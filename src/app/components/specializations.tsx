import Image from "next/image";
import { CheckCircle2, Scale, Users, HardHat } from "lucide-react";

const specializations = [
  {
    id: "civil",
    title: "Direito Civil",
    description:
      "O Direito Civil é a área que regula as relações entre particulares, abragendo questões familiares, contratuais, de propriedade e responsabilidade civil.",
    role: "Atuar na mediação de conflitos, elaboração e revisão de contratos, inventários, divórcios e ações de indenização, protegendo o patrimônio e as relações familiares.",
    who: "Qualquer cidadão ou empresa que necessite regularizar situações patrimoniais, familiares ou contratuais, ou que tenha sofrido algum dano material ou moral.",
    image: "/specializations/civil-law.webp",
    icon: Scale,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    description:
      "Ramo fundamental que rege as relações de trabalho, garantindo o equilíbrio justo entre empregados e empregadores e o estrito cumprimento das normas da CLT.",
    role: "Defender os direitos em casos de demissão injusta, horas extras, insalubridade e assédio, além de prestar assessoria jurídica preventiva para empresas.",
    who: "Trabalhadores que buscam reparação de direitos violados e empresas que desejam manter conformidade legal e evitar passivos trabalhistas.",
    image: "/specializations/labor-law.webp",
    icon: HardHat,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    description:
      "Área dedicada a garantir a segurança social dos cidadãos junto ao INSS, assegurando o acesso a benefícios vitais como aposentadorias, auxílios e pensões.",
    role: "Realizar planejamento previdenciário, analisar tempo de contribuição, reverter benefícios indeferidos e atuar em processos administrativos e judiciais.",
    who: "Contribuintes do INSS, idosos, pessoas com deficiência e familiares de segurados que necessitam de amparo para garantir seu sustento e dignidade.",
    image: "/specializations/social-security.webp",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export function Specializations() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden" id="especializacoes">
      <div className="container mx-auto px-4 md:px-6 pb-40">
        <div className="text-center max-w-3xl mx-auto mb-56 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 tracking-tight">
            Especializações
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Atuação jurídica de excelência, focada na defesa intransigente dos
            seus direitos e na busca pelas melhores soluções legais.
          </p>
        </div>

        <div className="space-y-24 md:space-y-80">
          {specializations.map((spec, index) => {
            const isEven = index % 2 === 0;
            const Icon = spec.icon;

            return (
              <div
                key={spec.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group">
                  <div
                    className={`absolute -inset-4 rounded-3xl opacity-20 blur-2xl transition duration-500 group-hover:opacity-30 ${spec.bg.replace(
                      "bg-",
                      "bg-"
                    )}`}
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(to right, #3b82f6, #60a5fa)"
                          : index === 1
                          ? "linear-gradient(to right, #f97316, #fb923c)"
                          : "linear-gradient(to right, #10b981, #34d399)",
                    }}
                  ></div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-zinc-100">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Icon Card */}
                  <div
                    className={`absolute -bottom-6 ${
                      isEven ? "-right-6" : "-left-6"
                    } bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 hidden md:block`}
                  >
                    <div className={`p-3 rounded-xl ${spec.bg}`}>
                      <Icon className={`w-8 h-8 ${spec.color}`} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${spec.bg} ${spec.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>Área de Atuação</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-800">
                      {spec.title}
                    </h3>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="shrink-0 bg-zinc-100 p-2 rounded-lg h-fit">
                        <CheckCircle2 className="w-5 h-5 text-zinc-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 mb-1">
                          Função do Advogado
                        </h4>
                        <p className="text-sm md:text-base text-zinc-600">
                          {spec.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="shrink-0 bg-zinc-100 p-2 rounded-lg h-fit">
                        <Users className="w-5 h-5 text-zinc-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 mb-1">
                          Quem tem direito
                        </h4>
                        <p className="text-sm md:text-base text-zinc-600">
                          {spec.who}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
