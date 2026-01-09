"use client";

import { MessageCircleQuestionMark } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const faqItems = [
  {
    question: "É cobrado algum valor pela primeira consulta?",
    answer:
      "A análise inicial do seu caso é realizada de forma gratuita. Acreditamos que você deve ter o direito de entender a viabilidade do seu processo antes de assumir qualquer compromisso financeiro. Agende uma conversa para avaliarmos sua situação.",
  },
  {
    question: "Qual a porcentagem cobrada pelos serviços?",
    answer:
      "Nosso escritório preza pela transparência total. Na maioria das causas trabalhistas e previdenciárias, trabalhamos com honorários de êxito (ad exitum), cobrando um percentual (geralmente 30%) apenas no final do processo e somente se ganharmos a causa.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer:
      "Atendemos de segunda a sexta-feira, das 08:00 às 18:00. Para maior comodidade, também oferecemos atendimento online via WhatsApp ou videochamada, permitindo que você tire suas dúvidas sem sair de casa.",
  },
  {
    question: "Como posso agendar um atendimento?",
    answer:
      "O agendamento é simples e rápido. Você pode entrar em contato conosco pelo botão de WhatsApp nesta página, pelo telefone fixo ou preenchendo o formulário de contato. Nossa equipe retornará o mais breve possível.",
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
                  className={`text-lg font-semibold transition-colors duration-300 ${
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
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-zinc-600 font-light">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
