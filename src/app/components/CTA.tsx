"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section className="relative py-20 bg-linear-to-br from-[#1a1f3a] via-[#374282] to-[#2a346e] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container-section relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Image - vem primeiro no mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full lg:order-2"
          >
            <div className="relative aspect-4/5 max-w-lg mx-auto">
              {/* Floating background cards */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [6, 8, 6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-br from-blue-500/30 to-purple-500/30 rounded-[2.5rem] backdrop-blur-sm"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [-6, -8, -6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-[2.5rem] backdrop-blur-sm"
              ></motion.div>

              {/* Main image container */}
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl shadow-black/40">
                <div className="absolute inset-0 bg-linear-to-t from-[#374282] via-transparent to-transparent z-10 opacity-60"></div>

                <Image
                  src="/Silvio-segurando-pasta.webp"
                  alt="Dr. Silvio Souza - Advocacia em Americana"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-2 -left-2 z-20"
              >
                <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl font-bold text-white">15+</div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Anos de
                      </div>
                      <div className="text-sm text-blue-200/80">
                        Experiência
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - vem depois no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 w-full lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-light text-blue-100">
                Atendimento Especializado
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Advocacia em Americana para quem busca segurança jurídica
              </h2>
              <p className="text-lg text-blue-100/80 max-w-xl">
                Não deixe suas dúvidas jurídicas para depois. Tenha a segurança
                de uma defesa qualificada com o{" "}
                <strong className="text-white font-medium">
                  Dr. Silvio Souza
                </strong>
                .
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.a
              href="https://wa.me/551936455954"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full lg:w-auto inline-flex items-center justify-center px-8 py-5 bg-linear-to-r from-[#25D366] to-[#20bd5a] rounded-2xl font-bold text-white shadow-lg shadow-emerald-500/25 overflow-hidden mt-10"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center gap-3">
                <WhatsappLogoIcon size={32} weight="thin" className="" />
                Conversar no WhatsApp
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
