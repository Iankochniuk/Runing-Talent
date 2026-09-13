import { motion } from "framer-motion";
import Container from "../ui/Container";
import homeImage from "../../assets/images/todos-los-rubros.jpg";

const industries = ["IT", "MINERÍA", "PETRÓLEO & GAS"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93A25] blur-[180px]"
      />

      <Container className="relative z-10">
        <div className="flex min-h-screen flex-col justify-center py-32">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#B93A25]" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
              Running talent / BÚSQUEDA Y SELECCIÓN
            </span>
          </motion.div>

          {/* Title */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 max-w-[1100px] text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-[12vw] lg:text-[9.5rem]"
            >
              Encontramos
              <br />
              <span className="text-white/90">el talento</span>
              <br />
              <span className="text-[#B93A25]">que mueve</span>
              <br />
              tu industria.
            </motion.h1>

            {/* Floating image */}
            <motion.div
              initial={{
                opacity: 0,
                x: 120,
                rotate: 6,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 3,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                rotate: 0,
                scale: 1.02,
              }}
              className="relative mt-12 ml-auto w-full max-w-[650px] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl lg:-mt-32 lg:mr-4"
            >
              <motion.img
                src={homeImage}
                alt="Running talent| - IT, minería y petróleo"
                className="h-[360px] w-full object-cover sm:h-[430px]"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.45,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  Running talent
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                  Conectamos talento especializado con empresas que hacen
                  avanzar sus industrias.
                </p>
              </div>

              {/* Corner number */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B93A25] text-sm font-black"
              >
                01
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="max-w-xl"
            >
              <p className="text-lg leading-8 text-white/40">
                Reclutamiento especializado para conectar profesionales
                altamente capacitados con organizaciones que buscan crecer,
                transformar y liderar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#contacto"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="rounded-full bg-[#B93A25] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em]"
                >
                  Buscar talento ↗
                </motion.a>

                <motion.a
                  href="#oportunidades"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="rounded-full border border-white/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
                >
                  Ver oportunidades
                </motion.a>
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.65,
              }}
              className="border-t border-white/10"
            >
              {industries.map((industry, index) => (
                <motion.a
                  key={industry}
                  href="#servicios"
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span className="text-xs font-bold tracking-[0.25em] text-white/20">
                    0{index + 1}
                  </span>

                  <span className="text-xl font-black uppercase tracking-[-0.03em] text-white/60 transition-colors group-hover:text-white">
                    {industry}
                  </span>

                  <span className="text-[#B93A25] transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Marquee */}
      <div className="border-t border-white/10">
        <div className="overflow-hidden py-5">
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-12 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/20"
          >
            <span>IT Talent</span>
            <span>•</span>
            <span>Mining Talent</span>
            <span>•</span>
            <span>Oil & Gas</span>
            <span>•</span>
            <span>Executive Search</span>
            <span>•</span>
            <span>IT Talent</span>
            <span>•</span>
            <span>Mining Talent</span>
            <span>•</span>
            <span>Oil & Gas</span>
            <span>•</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
