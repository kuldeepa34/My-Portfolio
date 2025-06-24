import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
      >
        Hi, I’m Kuldeep
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl text-gray-300 max-w-xl"
      >
        Full Stack Developer | Creative Thinker | Passionate Coder
      </motion.p>
    </section>
  );
}
