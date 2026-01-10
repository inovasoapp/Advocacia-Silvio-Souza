"use client";

import { MessageCircleQuestionMark } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const faqItems = [
  {
    question: "É cobrado algum valor pela primeira consulta?",
    answer:
      "A primeira consulta é gratuita quando há a contratação dos serviços jurídicos, permitindo a análise inicial do caso e a orientação adequada. Caso não haja prosseguimento com a contratação, a consulta é realizada mediante o valor de R$ 150,00, referente à análise e esclarecimentos prestados.",
  },
  {
    question: "Como é cobrado pelos serviços?",
    answer:
      "Os honorários advocatícios são estabelecidos no formato de êxito, ou seja, o cliente só realiza o pagamento se a causa for vencedora. <O percentual é definido de forma clara e transparente na etapa inicial, após a avaliação técnica do caso>, garantindo previsibilidade e alinhamento entre as partes desde o início do processo.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer:
      "Nosso atendimento ocorre em horário comercial, de <segunda, terça e quinta-feira, das 8h às 16h> e às <quartas e sextas-feiras, das 8h às 12h>. Para melhor organização e qualidade no atendimento, recomenda-se o agendamento prévio.",
  },
  {
    question: "Como posso agendar um atendimento?",
    answer:
      "O agendamento pode ser realizado de forma simples e rápida pelo <WhatsApp: (19) 9 9273-2038> ou pelo <Telefone Fixo: (19) 3645-5954>. Nossa equipe está disponível para orientar e confirmar o melhor horário para o atendimento.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-b from-neutral-50 via-white to-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100 text-sm font-light text-gray-500">
              <MessageCircleQuestionMark className="w-4 h-4" strokeWidth={1} />
              Dúvidas
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-[2rem] font-bold text-zinc-800 tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base lg:text-lg text-zinc-600 font-light">
            Tire suas dúvidas sobre nossos serviços e atendimento. Se precisar
            de mais ajuda, nossa equipe está pronta para orientar você.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "bg-white border-zinc-300 shadow-lg ring-1 ring-zinc-200"
                  : "bg-white/50 border-zinc-200 hover:border-zinc-300 hover:bg-white hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-hidden"
              >
                <span
                  className={`text-base font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-zinc-700"
                      : "text-zinc-600 group-hover:text-zinc-700"
                  }`}
                >
                  {item.question}
                </span>
                <span className="ml-4 shrink-0">
                  <svg
                    className={`h-6 w-6 text-zinc-400 transition-transform duration-300 ease-in-out ${
                      openIndex === index
                        ? "rotate-180 text-zinc-800"
                        : "group-hover:text-zinc-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "h-full opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-zinc-600 font-light">
                    {item.answer.split(/(<[^>]+>)/g).map((part, index) =>
                      part.startsWith("<") && part.endsWith(">") ? (
                        <strong
                          key={index}
                          className="font-semibold text-zinc-500"
                        >
                          {part.slice(1, -1)}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
