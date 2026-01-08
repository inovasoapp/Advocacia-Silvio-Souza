"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function AddressAndContact() {
  return (
    <section className="relative py-24 overflow-hidden bg-neutral-50/50">
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-[2rem] font-bold text-zinc-800 tracking-tight leading-tight">
            Endereço e Contatos
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed font-light">
            Entre em contato conosco para agendar uma consulta ou visite nosso
            escritório.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-zinc-100"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-50 text-[#374282] rounded-lg group-hover:bg-[#374282] group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-600 mb-0.5">
                    Localização
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    Rua Dr. Cândido Cruz, 384
                    <br />
                    Centro, Americana - SP
                    <br />
                    CEP: 13465-350
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-50 text-[#374282] rounded-lg group-hover:bg-[#374282] group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-600 mb-0.5">
                    Telefone
                  </h3>
                  <p className="text-zinc-600">(19) 3645-5954</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-50 text-[#374282] rounded-lg group-hover:bg-[#374282] group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-600 mb-0.5">
                    E-mail
                  </h3>
                  <a
                    href="mailto:silviosouzza@hotmail.com"
                    className="text-zinc-600 hover:text-[#374282] transition-colors text-sm"
                  >
                    silviosouzza@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-zinc-100" />

            <a
              href="https://wa.me/551936455954"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-1"
            >
              <MessageCircle size={24} strokeWidth={2} />
              <span>Chamar no WhatsApp: (19) 3645-5954</span>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[500px] w-full bg-zinc-200 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative group"
          >
            <iframe
              src="https://maps.google.com/maps?q=Rua+Dr.+Candido+cruz,+384,+centro,+Americana+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full filter grayscale-0 group-hover:grayscale-0 transition-all duration-500"
              title="Mapa de Localização"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
