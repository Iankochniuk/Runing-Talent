import { motion } from "framer-motion";
import homeImage from "../../assets/images/todos-los-rubros.jpg";

const stats = [
  {
    number: "+500",
    title: "Profesionales conectados",
  },
  {
    number: "+80",
    title: "Empresas acompañadas",
  },
  {
    number: "3",
    title: "Industrias especializadas",
  },
  {
    number: "+15",
    title: "Años de experiencia",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={homeImage}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Línea superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px w-full origin-left bg-white/15"
        />

        <div className="grid md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative border-b border-r border-white/10 px-6 py-14 md:min-h-[270px]"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-6xl font-black tracking-[-0.06em] sm:text-7xl lg:text-8xl"
              >
                {item.number}
              </motion.h3>

              <p className="mt-5 max-w-[200px] text-xs font-bold uppercase leading-5 tracking-[0.18em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
                {item.title}
              </p>

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-[#B93A25]"
              />

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#B93A25]"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-between gap-6 pt-10 sm:flex-row sm:items-center"
        >
          <p className="max-w-2xl text-sm leading-6 text-white/30">
            Experiencia, conocimiento de industria y una red de profesionales
            preparada para acompañar a empresas y candidatos.
          </p>

          <div className="flex gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
            <span>IT</span>
            <span>•</span>
            <span>MINERÍA</span>
            <span>•</span>
            <span>PETRÓLEO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
