"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#374282] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-section relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-100 text-sm font-medium border border-blue-400/30">
                Atendimento Especializado
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Proteja seus direitos com quem entende do assunto
              </h2>
              <p className="text-lg text-blue-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Não deixe suas dúvidas jurídicas para depois. Agende uma
                consulta com o Dr. Silvio Souza e tenha a segurança de uma
                defesa qualificada e intransigente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/551936455954"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/20 transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#contato"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                <span>Saber mais</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-blue-200/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Atendimento Online
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Atendimento Presencial
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20 scale-95 translate-y-4"></div>
              <div className="absolute inset-0 bg-[#2a346e] rounded-3xl -rotate-6 opacity-40 scale-95 translate-y-4"></div>

              <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                {/* Gradient Overlay for better integration */}
                <div className="absolute inset-0 bg-linear-to-t from-[#374282]/80 via-transparent to-transparent z-10 opacity-60"></div>

                <Image
                  src="/Silvio-segurando-pasta.webp"
                  alt="Dr. Silvio Souza"
                  fill
                  className="object-cover object-top hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 hidden md:block">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <p className="text-4xl font-bold text-[#374282] mb-1">15+</p>
                  <p className="text-sm font-medium text-zinc-600 uppercase tracking-wider">
                    Anos de
                    <br />
                    Experiência
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
