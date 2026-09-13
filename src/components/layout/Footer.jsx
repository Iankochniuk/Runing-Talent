import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const navigation = [
  ["Inicio", "#inicio"],
  ["Industrias", "#servicios"],
  ["Nosotros", "#nosotros"],
  ["Oportunidades", "#oportunidades"],
  ["Contacto", "#contacto"],
];

const industries = ["IT", "Minería", "Petróleo & Gas", "Energía"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#010101] text-white">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* MAIN */}
        <div className="grid gap-16 py-20 lg:grid-cols-[1.7fr_0.7fr_0.7fr]">
          {/* BRAND */}
          <div>
            <motion.a
              href="#inicio"
              whileHover={{ x: 6 }}
              className="inline-block text-6xl font-black uppercase leading-none tracking-[-0.07em]"
            >
              Runing <span className="text-[#B93A25]">Talente</span>
            </motion.a>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/35">
              Recruiting especializado para conectar talento con organizaciones
              de IT, minería, petróleo y energía.
            </p>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              className="mt-8 inline-flex items-center gap-4 rounded-full border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:border-[#B93A25] hover:text-white"
            >
              Trabajemos juntos
              <span className="text-[#B93A25]">↗</span>
            </motion.a>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-white/25">
              Navegación
            </p>

            <div className="space-y-4">
              {navigation.map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 7 }}
                  className="block text-sm text-white/50 transition-colors hover:text-white"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* INDUSTRIES */}
          <div>
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-white/25">
              Especialidades
            </p>

            <div className="space-y-4">
              {industries.map((industry) => (
                <motion.p
                  key={industry}
                  whileHover={{ x: 7 }}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {industry}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* GIANT WORD */}
        <div className="overflow-hidden border-t border-white/10 py-10">
          <motion.div
            animate={{ x: [0, -500, 0] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="whitespace-nowrap text-[18vw] font-black uppercase leading-[0.7] tracking-[-0.08em] text-white/[0.035]"
          >
            Runing Talent Runing Talent Runing Talent
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            © {year} Runing Talent. Todos los derechos reservados.
          </p>

          <motion.a
            href="#inicio"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#B93A25",
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors"
          >
            <ArrowUp size={17} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
