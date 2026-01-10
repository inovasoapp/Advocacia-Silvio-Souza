"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

export function AddressAndContact() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-neutral-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(55,66,130,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(55,66,130,.02)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100 text-sm font-light text-gray-500">
              <MapPin className="w-4 h-4" strokeWidth={1} />
              Localização em Americana
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-[2rem] font-bold text-zinc-800 tracking-tight leading-tight mb-4">
            Endereço e Contatos
          </h2>
          <p className="text-base lg:text-lg text-zinc-600 leading-relaxed">
            Entre em contato com a <strong>Advocacia Silvio Souza</strong> para
            agendar uma consulta ou visite nossa{" "}
            <strong>Advocacia em Americana</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Address */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/10 to-purple-500/10 text-[#374282] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" strokeWidth={1} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-zinc-700 mb-0.5 uppercase tracking-wider">
                      Localização
                    </h3>
                    <p className="text-zinc-600 font-light text-sm leading-relaxed">
                      Rua Dr. Cândido Cruz, 392
                      <br />
                      Centro, Americana - SP
                      <br />
                      CEP: 13465-350
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/10 to-purple-500/10 text-[#374282] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" strokeWidth={1} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-zinc-700 mb-0.5 uppercase tracking-wider">
                      Telefone
                    </h3>
                    <a
                      href="tel:+551936455954"
                      className="text-zinc-600 hover:text-[#374282] transition-colors font-light text-sm"
                    >
                      (19) 3645-5954
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/10 to-purple-500/10 text-[#374282] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" strokeWidth={1} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-zinc-700 mb-0.5 uppercase tracking-wider">
                      E-mail
                    </h3>
                    <a
                      href="mailto:silviosouzza@hotmail.com"
                      className="text-zinc-600 font-light text-sm hover:text-[#374282] transition-colors break-all"
                    >
                      silviosouzza@hotmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Horário */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/10 to-purple-500/10 text-[#374282] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6" strokeWidth={1} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-zinc-700 mb-0.5 uppercase tracking-wider">
                      Horário de Atendimento
                    </h3>
                    <p className="text-zinc-600 font-light text-sm leading-relaxed">
                      Segunda / Terça / Quinta: 8h às 16h
                      <br />
                      Quarta e Sexta: 8h às 12h
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/5519992732038"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-3 w-full bg-linear-to-r from-[#25D366] to-[#20bd5a] text-white font-bold py-5 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <WhatsappLogoIcon size={28} weight="thin" className="relative" />
              <span className="relative">Chamar no WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative h-[600px] lg:sticky lg:top-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative h-full w-full bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 group">
              {/* Map overlay with info */}
              <div className="absolute top-32 left-3 right-6 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-zinc-200/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#374282] rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm mb-1">
                      Advocacia em Americana
                    </h4>
                    <p className="text-xs text-zinc-600">
                      Rua Dr. Cândido Cruz, 392 - Centro
                    </p>
                  </div>
                </div>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=Rua+Dr.+Candido+cruz,+392,+centro,+Americana+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Localização da Advocacia Silvio Souza em Americana"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
