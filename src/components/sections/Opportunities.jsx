import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, BriefcaseBusiness } from "lucide-react";

const opportunities = [
  {
    number: "01",
    role: "Senior Software Engineer",
    sector: "IT",
    location: "Buenos Aires",
    type: "Full Time",
  },
  {
    number: "02",
    role: "Mining Project Manager",
    sector: "MINERÍA",
    location: "Salta",
    type: "Full Time",
  },
  {
    number: "03",
    role: "Petroleum Engineer",
    sector: "PETRÓLEO & GAS",
    location: "Neuquén",
    type: "Full Time",
  },
  {
    number: "04",
    role: "Data & Analytics Specialist",
    sector: "IT",
    location: "Remoto",
    type: "Full Time",
  },
];

export default function Opportunities() {
  return (
    <section
      id="oportunidades"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white"
    >
      {/* Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px] rounded-full bg-[#B93A25]/10 blur-[160px]"
      />

      <div className="mx-auto max-w-[1400px]">
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
          <div className="flex items-start gap-4">
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-[#B93A25]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Oportunidades
            </span>
          </div>

          <div>
            <h2 className="text-6xl font-black uppercase leading-[0.8] tracking-[-0.07em] sm:text-8xl lg:text-[8rem]">
              Tu próximo
              <br />
              desafío
              <br />
              <span className="text-[#B93A25]">está acá.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/40">
              Descubrí oportunidades en IT, minería, petróleo y gas. Tu próxima
              experiencia profesional puede empezar con una conexión.
            </p>
          </div>
        </motion.div>

        {/* JOB LIST */}
        <div className="mt-20 border-t border-white/10">
          {opportunities.map((job, index) => (
            <motion.a
              key={job.number}
              href="#contacto"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 12 }}
              className="group relative block border-b border-white/10"
            >
              <div className="grid min-h-[190px] gap-8 py-10 lg:grid-cols-[90px_180px_1fr_220px_70px] lg:items-center">
                {/* NUMBER */}
                <motion.span
                  whileHover={{ x: 5 }}
                  className="text-xs font-bold tracking-[0.3em] text-white/20"
                >
                  {job.number}
                </motion.span>

                {/* SECTOR */}
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B93A25]">
                  {job.sector}
                </span>

                {/* ROLE */}
                <div>
                  <motion.h3
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-4xl"
                  >
                    {job.role}
                  </motion.h3>

                  <div className="mt-4 flex flex-wrap gap-5 text-xs uppercase tracking-[0.15em] text-white/30">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <BriefcaseBusiness size={14} />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-white">
                  Ver oportunidad
                </span>

                {/* ARROW */}
                <motion.span
                  whileHover={{
                    rotate: 45,
                    scale: 1.1,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#B93A25] group-hover:text-[#B93A25]"
                >
                  <ArrowUpRight size={20} />
                </motion.span>
              </div>

              {/* Hover line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#B93A25]"
              />

              {/* Background number */}
              <span className="pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 text-[10rem] font-black leading-none text-white/[0.025]">
                {job.number}
              </span>
            </motion.a>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col justify-between gap-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-lg text-sm leading-6 text-white/30">
            ¿No encontraste la posición que buscabas? Dejanos tu perfil y
            podremos contactarte cuando aparezca una oportunidad para vos.
          </p>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#B93A25] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Dejar mi perfil
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </motion.a>
        </motion.div>

        {/* MARQUEE */}
        <div className="mt-20 overflow-hidden border-y border-white/10 py-5">
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-12 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/20"
          >
            <span>Encontrá tu próximo desafío</span>
            <span>•</span>
            <span>IT</span>
            <span>•</span>
            <span>MINERÍA</span>
            <span>•</span>
            <span>PETRÓLEO & GAS</span>
            <span>•</span>
            <span>ENERGÍA</span>
            <span>•</span>
            <span>Encontrá tu próximo desafío</span>
            <span>•</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
