import { motion } from "framer-motion";
import {
  Code2,
  Pickaxe,
  Fuel,
  Search,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import itImage from "../../assets/images/it.jpg";
import mineriaImage from "../../assets/images/mineria.jpg";
import petroleoImage from "../../assets/images/petroleo-gas.jpg";

const industries = [
  {
    number: "01",
    sector: "IT",
    title: "Talento tecnológico",
    description:
      "Encontramos perfiles especializados en desarrollo, datos, infraestructura, ciberseguridad y tecnología.",
    image: itImage,
    icon: Code2,
  },
  {
    number: "02",
    sector: "MINERÍA",
    title: "Talento minero",
    description:
      "Conectamos empresas mineras con profesionales preparados para operaciones y proyectos estratégicos.",
    image: mineriaImage,
    icon: Pickaxe,
  },
  {
    number: "03",
    sector: "PETRÓLEO & GAS",
    title: "Talento energético",
    description:
      "Seleccionamos profesionales para petróleo, gas, energía y operaciones técnicas de alta especialización.",
    image: petroleoImage,
    icon: Fuel,
  },
];

const services = [
  {
    number: "04",
    title: "Búsqueda especializada",
    description:
      "Identificamos perfiles difíciles de encontrar mediante procesos de búsqueda personalizados.",
    icon: Search,
  },
  {
    number: "05",
    title: "Selección de personal",
    description:
      "Evaluamos experiencia, conocimientos y encaje para encontrar el perfil indicado.",
    icon: Users,
  },
  {
    number: "06",
    title: "Headhunting",
    description:
      "Localizamos profesionales clave para posiciones críticas y de alto impacto.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
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
          className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.7fr_1.8fr]"
        >
          <div className="flex items-start gap-4">
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-[#B93A25]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Nuestras industrias
            </span>
          </div>

          <div>
            <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[8rem]">
              Talento
              <br />
              donde
              <br />
              <span className="text-[#B93A25]">importa.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/40">
              Especialización y conocimiento de industria para conectar empresas
              con profesionales que realmente puedan generar impacto.
            </p>
          </div>
        </motion.div>

        {/* INDUSTRIAS */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden bg-[#0a0a0a]"
              >
                {/* Imagen */}
                <div className="relative h-[500px] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Número */}
                  <span className="absolute left-6 top-6 text-sm font-bold tracking-[0.25em] text-white/60">
                    {item.number}
                  </span>

                  {/* Icono */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md"
                  >
                    <Icon size={19} />
                  </motion.div>

                  {/* Texto */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B93A25]">
                      {item.sector}
                    </p>

                    <h3 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                      {item.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                      Explorar
                      <ArrowUpRight size={15} className="text-[#B93A25]" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* OTROS SERVICIOS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10"
        >
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 12 }}
                className="group relative grid gap-6 border-b border-white/10 py-8 lg:grid-cols-[100px_1fr_100px] lg:items-center"
              >
                <span className="text-xs font-bold tracking-[0.25em] text-white/20">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/35">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 45,
                    scale: 1.1,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 lg:justify-self-end"
                >
                  <Icon size={19} />
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#B93A25]"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* MARQUEE */}
        <div className="mt-10 overflow-hidden border-y border-white/10 py-5">
          <motion.div
            animate={{ x: [0, -700] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-12 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/20"
          >
            <span>IT</span>
            <span>•</span>
            <span>MINERÍA</span>
            <span>•</span>
            <span>PETRÓLEO & GAS</span>
            <span>•</span>
            <span>TALENTO</span>
            <span>•</span>
            <span>RECRUITMENT</span>
            <span>•</span>
            <span>IT</span>
            <span>•</span>
            <span>MINERÍA</span>
            <span>•</span>
            <span>PETRÓLEO & GAS</span>
            <span>•</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
