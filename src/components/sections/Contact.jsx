import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@Runing Talent.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 11 1234 5678",
  },
  {
    icon: MapPin,
    label: "Presencia",
    value: "Argentina · LATAM",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-b border-white/10 pb-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#B93A25]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Contacto
            </span>
          </div>

          <h2 className="max-w-6xl text-6xl font-black uppercase leading-[0.8] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]">
            Hagamos
            <br />
            <span className="text-white/35">la próxima</span>
            <br />
            conexión.
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-20 grid gap-20 lg:grid-cols-[0.75fr_1.25fr]">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-md text-lg leading-8 text-white/40">
              ¿Buscás talento para tu empresa o querés dar el próximo paso en tu
              carrera? Estamos para escucharte.
            </p>

            <div className="mt-12 space-y-7">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-5 border-b border-white/10 pb-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-[#B93A25]">
                      <Icon size={18} className="text-[#B93A25]" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25">
                        {item.label}
                      </p>

                      <p className="mt-2 text-base text-white/70">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mini statement */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-sm uppercase leading-6 tracking-[0.15em] text-white/20"
            >
              IT · MINERÍA · PETRÓLEO & GAS
            </motion.p>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-white/10"
          >
            {/* Tipo de contacto */}
            <div className="grid border-b border-white/10 sm:grid-cols-2">
              <button
                type="button"
                className="border-b border-[#B93A25] px-0 py-5 text-left text-xs font-bold uppercase tracking-[0.2em] text-white sm:border-b-0"
              >
                Busco talento
              </button>

              <button
                type="button"
                className="px-0 py-5 text-left text-xs font-bold uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
              >
                Busco oportunidades
              </button>
            </div>

            <div className="grid gap-8 border-b border-white/10 py-8 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                  Nombre
                </label>

                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#B93A25]"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#B93A25]"
                />
              </div>
            </div>

            <div className="border-b border-white/10 py-8">
              <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                Empresa
              </label>

              <input
                type="text"
                placeholder="Nombre de tu empresa"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#B93A25]"
              />
            </div>

            <div className="border-b border-white/10 py-8">
              <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                Industria
              </label>

              <select className="w-full appearance-none border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none focus:border-[#B93A25]">
                <option className="bg-[#080808]">IT</option>
                <option className="bg-[#080808]">Minería</option>
                <option className="bg-[#080808]">Petróleo & Gas</option>
                <option className="bg-[#080808]">Energía</option>
                <option className="bg-[#080808]">Otra</option>
              </select>
            </div>

            <div className="border-b border-white/10 py-8">
              <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                Mensaje
              </label>

              <textarea
                rows="5"
                placeholder="Contanos qué perfil necesitás..."
                className="w-full resize-none bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="group mt-8 inline-flex items-center gap-6 rounded-full bg-[#B93A25] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Enviar consulta
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
