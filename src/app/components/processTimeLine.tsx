"use client";

import { motion } from "motion/react";
import { FileSearch, MessageSquare, Gavel, Clock, Shield } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Análise individual do caso",
    description:
      "Avaliação detalhada da situação, documentos e contexto jurídico, respeitando as particularidades de cada cliente.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Orientação clara e objetiva",
    description:
      "Explicações acessíveis, sem juridiquês excessivo, para que cada decisão seja tomada com total compreensão.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Gavel,
    title: "Definição da estratégia jurídica",
    description:
      "Estruturação do melhor caminho jurídico, considerando riscos, prazos e cenários possíveis.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Acompanhamento contínuo",
    description:
      "Comunicação transparente sobre o andamento do processo e próximos passos.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Shield,
    title: "Atuação ética e responsável",
    description:
      "Condução técnica, ética e comprometida em todas as etapas do processo.",
    gradient: "from-green-500 to-lime-500",
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-b from-neutral-50 via-white to-neutral-50">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100 text-sm font-medium text-blue-700">
              <Shield className="w-4 h-4" />
              Nossa Metodologia
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 mb-4">
            Como Trabalhamos
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Um processo transparente e estruturado para buscar os melhores
            resultados
          </p>
        </motion.div>

        {/* Timeline para desktop */}
        <div className="hidden md:block relative">
          {/* Linha conectora animada */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-200 via-cyan-300 to-green-200 origin-top -translate-x-1/2"
          />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 70,
                  }}
                  className="relative flex items-center"
                >
                  {/* Card - lado esquerdo ou direito */}
                  <div
                    className={`w-5/12 ${
                      isEven ? "pr-16 text-right" : "ml-auto pl-16 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-100 overflow-hidden"
                    >
                      {/* Gradient decorativo no hover */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div
                          className={`flex items-center gap-3 mb-4 ${
                            isEven ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${step.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Número do passo */}
                      <div
                        className={`absolute ${
                          isEven ? "left-8" : "right-8"
                        } top-8 text-6xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors`}
                      >
                        {index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Nó central */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="absolute left-1/2 -translate-x-1/2 z-20"
                  >
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-full bg-linear-to-br ${step.gradient} shadow-xl flex items-center justify-center`}
                      >
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                          <Icon className="w-7 h-7 text-neutral-700" />
                        </div>
                      </div>
                      {/* Pulse effect */}
                      <div
                        className={`absolute inset-0 rounded-full bg-linear-to-br ${step.gradient} opacity-30 animate-ping`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline para mobile */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Linha vertical */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-6 top-16 bottom-0 w-0.5 bg-linear-to-b ${step.gradient} opacity-30 -translate-x-1/2`}
                  />
                )}

                {/* Nó */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="absolute left-0 top-0"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-linear-to-br ${step.gradient} shadow-lg flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-white p-6 shadow-md border border-neutral-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-4xl font-bold text-neutral-100">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 mt-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
