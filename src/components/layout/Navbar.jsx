import { motion } from "framer-motion";

const links = ["Inicio", "Servicios", "Nosotros", "Oportunidades"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 w-full px-5 py-5"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.04 }}
          className="text-2xl font-black tracking-[-0.06em]"
        >
          Running<span className="text-[#B93A25]">Talent</span>
        </motion.a>

        {/* Links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full bg-[#B93A25] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white"
        >
          Contacto ↗
        </motion.a>
      </nav>
    </motion.header>
  );
}
