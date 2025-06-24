import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" aria-label="About Me Section" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-slate-900">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl text-center text-gray-300 text-lg"
      >
        <p className="mb-4">
          I’m <span className="text-white font-semibold">Kuldeep Singh Arya</span>, a passionate Full Stack Developer with experience in 
          <span className="text-blue-400"> React, Node.js, Angular, MongoDB, SQL, Bootstrap</span>, and more.
          I love building creative, modern, and user-friendly web applications.
        </p>

        <p>
          My goal is to combine technology and creativity to deliver impactful solutions. I enjoy solving real-world problems through elegant code and clean UI.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {['React', 'Node.js', 'Angular', 'MongoDB', 'Tailwind', 'Express.js', 'GitHub', 'HTML5'].map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800 px-4 py-2 rounded-xl text-white text-center shadow hover:bg-slate-700 hover:scale-105 duration-300"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
