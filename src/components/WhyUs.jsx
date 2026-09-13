import { motion } from "framer-motion";
import {
  Target,
  SearchCheck,
  UsersRound,
  BriefcaseBusiness,
} from "lucide-react";

const items = [
  {
    number: "01",
    icon: Target,
    title: "Especialización",
    description:
      "Conocemos las necesidades y perfiles que requieren IT, minería, petróleo y energía.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Búsqueda precisa",
    description:
      "Encontramos profesionales con la experiencia y las capacidades que cada posición necesita.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Talento real",
    description:
      "Conectamos personas y empresas para construir relaciones profesionales de largo plazo.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Resultados",
    description:
      "Reducimos tiempos de búsqueda y acercamos el perfil correcto para cada desafío.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white">
      {/* Decoración */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-60 top-20 h-[500px] w-[500px] rounded-full bg-[#B93A25]/10 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-60 bottom-0 h-[450px] w-[450px] rounded-full bg-[#8440A0]/10 blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.7fr_1.8fr]"
        >
          <div>
            <div className="flex items-center gap-4">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#B93A25]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Por qué Runing Talent
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[8rem]">
              El talento
              <br />
              correcto
              <br />
              <span className="text-[#B93A25]">cambia todo.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/40">
              No buscamos simplemente cubrir posiciones. Buscamos personas que
              puedan transformar el próximo desafío de una organización.
            </p>
          </div>
        </motion.div>

        {/* LISTA */}
        <div className="mt-20 border-t border-white/10">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-b border-white/10"
              >
                <motion.div
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.35 }}
                  className="grid min-h-[210px] items-center gap-8 py-10 lg:grid-cols-[100px_180px_1fr_100px]"
                >
                  {/* Número */}
                  <span className="text-xs font-bold tracking-[0.3em] text-white/20">
                    {item.number}
                  </span>

                  {/* Icono */}
                  <motion.div
                    whileHover={{
                      rotate: 12,
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10"
                  >
                    <Icon
                      size={22}
                      className="text-white/60 transition-colors duration-300 group-hover:text-[#B93A25]"
                    />
                  </motion.div>

                  {/* Texto */}
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
                      {item.title}
                    </h3>

                    <motion.p
                      initial={{ opacity: 0.35 }}
                      whileHover={{ opacity: 1 }}
                      className="mt-4 max-w-2xl text-sm leading-6 text-white/40 sm:text-base"
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors group-hover:border-[#B93A25] group-hover:text-[#B93A25]"
                  >
                    ↗
                  </motion.div>
                </motion.div>

                {/* Línea */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.45 }}
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#B93A25]"
                />

                {/* Número gigante de fondo */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 text-[10rem] font-black leading-none text-white/[0.025]"
                >
                  {item.number}
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        {/* STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24"
        >
          <p className="max-w-6xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            No conectamos
            <br />
            empresas con CVs.
            <br />
            <span className="text-[#B93A25]">Conectamos personas</span>
            <br />
            con oportunidades.
          </p>
        </motion.div>

        {/* INDUSTRIAS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-3 border-t border-white/10 pt-8"
        >
          {["IT", "MINERÍA", "PETRÓLEO", "GAS", "ENERGÍA"].map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
            >
              {sector}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
