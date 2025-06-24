import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-24 sm:py-32 bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-800 mb-6"
      >
        Hi, I'm <span className="text-pink-600">Kuldeep</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-gray-700 max-w-xl"
      >
        A creative full stack developer who loves to build stunning, animated & responsive web apps.
      </motion.p>

      <motion.a
        href="#projects"
        aria-label="Scroll to Projects section"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium rounded-full shadow-lg hover:shadow-pink-400 transition"
      >
        View My Projects
      </motion.a>
    </section>
  );
}
