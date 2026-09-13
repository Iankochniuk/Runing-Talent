export default function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]",

    secondary:
      "rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10",
  };

  return <button className={styles[variant]}>{children}</button>;
}
