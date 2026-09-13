import { motion } from "framer-motion";
import { CheckCircle2, Laptop2, BrainCircuit, Users } from "lucide-react";

const features = [
  "Desarrollo de aplicaciones web modernas",
  "Automatización de procesos empresariales",
  "Integración con APIs y servicios Cloud",
  "Soluciones escalables y mantenibles",
];

const cards = [
  {
    icon: Laptop2,
    title: "Desarrollo",
    text: "Aplicaciones web rápidas, modernas y escalables.",
  },
  {
    icon: BrainCircuit,
    title: "IA",
    text: "Automatizaciones inteligentes para optimizar procesos.",
  },
  {
    icon: Users,
    title: "Equipo",
    text: "Profesionales enfocados en resultados y calidad.",
  },
  {
    icon: CheckCircle2,
    title: "Calidad",
    text: "Código limpio, mantenible y preparado para crecer.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-[#010101] px-6 py-32 text-white"
    >
      {/* Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#8440A0]/10 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#B93A25]/10 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.7fr_1.6fr]"
        >
          <div>
            <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              <span className="h-2 w-2 rounded-full bg-[#B93A25]" />
              Nosotros
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Pensamos
              <br />
              diferente.
              <br />
              <span className="text-[#B93A25]">Construimos mejor.</span>
            </h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-xl text-lg leading-8 text-white/50">
              Somos un equipo enfocado en crear productos digitales que combinan
              diseño, estrategia y tecnología para resolver problemas reales.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex items-center gap-4 border-b border-white/10 pb-5"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-[#B93A25]" />

                  <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative min-h-[250px] overflow-hidden bg-[#080808] p-8 transition-colors duration-500 hover:bg-[#111111]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.25em] text-white/20">
                      0{index + 1}
                    </span>

                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10"
                    >
                      <Icon size={19} className="text-white/70" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      {card.text}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#B93A25]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <p className="max-w-4xl text-3xl font-black uppercase leading-tight tracking-[-0.03em] text-white/90 sm:text-4xl lg:text-5xl">
            No hacemos tecnología por hacerla.
            <span className="text-[#B93A25]">
              {" "}
              Creamos herramientas que mueven negocios.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
