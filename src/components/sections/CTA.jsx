import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white">
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93A25]/20 blur-[150px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-[1400px] overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 sm:p-12 lg:p-20"
      >
        {/* Decorative text */}
        <motion.span
          animate={{ x: [-20, 20, -20] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-20 top-10 text-[10rem] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[15rem]"
        >
          Runing Talent
        </motion.span>

        <div className="relative z-10 max-w-6xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#B93A25]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Hablemos
            </span>
          </div>

          <h2 className="max-w-6xl text-6xl font-black uppercase leading-[0.8] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]">
            ¿Buscás
            <br />
            <span className="text-white/35">talento?</span>
            <br />
            Encontrémoslo.
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/40">
              Contanos qué perfil necesitás y nos encargamos de encontrar a la
              persona indicada para el desafío.
            </p>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex w-fit items-center gap-6 rounded-full bg-[#B93A25] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Contactar a Runing Talent
              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.25 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black"
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </motion.a>
          </div>
        </div>

        {/* Bottom sectors */}
        <div className="relative z-10 mt-16 flex flex-wrap gap-3 border-t border-white/10 pt-6">
          {["IT", "MINERÍA", "PETRÓLEO & GAS", "ENERGÍA"].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
