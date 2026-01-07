"use client";

import { motion } from "motion/react";
import { FileSearch, MessageSquare, Gavel, Clock, Shield } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Análise individual do caso",
    description:
      "Avaliação detalhada da situação, documentos e contexto jurídico, respeitando as particularidades de cada cliente.",
  },
  {
    icon: MessageSquare,
    title: "Orientação clara e objetiva",
    description:
      "Explicações acessíveis, sem juridiquês excessivo, para que cada decisão seja tomada com total compreensão.",
  },
  {
    icon: Gavel,
    title: "Definição da estratégia jurídica",
    description:
      "Estruturação do melhor caminho jurídico, considerando riscos, prazos e cenários possíveis.",
  },
  {
    icon: Clock,
    title: "Acompanhamento contínuo",
    description:
      "Comunicação transparente sobre o andamento do processo e próximos passos.",
  },
  {
    icon: Shield,
    title: "Atuação ética e responsável",
    description:
      "Condução técnica, ética e comprometida em todas as etapas do processo.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative container-section overflow-hidden mb-48">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-center md:mb-24"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Como Trabalhamos
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Nossa metodologia de atuação jurídica passo a passo
          </p>
        </motion.div>

        {/* Linha central (exibida apenas em desktop) */}
        <div className="absolute left-1/2 top-32 bottom-0 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-neutral-300 to-transparent md:block" />

        <div className="space-y-20 md:space-y-0 mt-48">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Lado do Card */}
                <div className="w-full px-4 md:w-1/2 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 50,
                    }}
                    className={`relative rounded-2xl border border-neutral-100 bg-white p-8 shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl
                      ${isEven ? "md:text-right" : "md:text-left"}
                    `}
                  >
                    {/* Icone Mobile */}
                    <div className="mb-4 flex items-center gap-3 md:hidden">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        {step.title}
                      </h3>
                    </div>

                    {/* Titulo Desktop */}
                    <h3 className="mb-3 hidden text-xl font-bold text-neutral-900 md:block">
                      {step.title}
                    </h3>

                    <p className="text-base leading-relaxed text-neutral-600">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Nó Central */}
                <div className="relative z-10 my-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white shadow-md md:my-0">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex h-full w-full items-center justify-center rounded-full bg-primary/5 text-primary"
                  >
                    <Icon size={24} />
                  </motion.div>
                </div>

                {/* Lado Vazio (para balanceamento) */}
                <div className="hidden w-1/2 md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
