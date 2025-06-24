import { motion } from 'framer-motion';

const projects = [
  {
    name: "Food Delivery App",
    desc: "A modern food ordering platform with admin panel and real-time updates.",
    tech: ["Next.js", "TypeORM", "Node.js", "Tailwind"],
  },
  {
    name: "TIMS Dashboard",
    desc: "Telecom monitoring system using Angular and Node.js with real-time GPRS data.",
    tech: ["Angular", "Node.js", "MongoDB"],
  },
  {
    name: "React Portfolio",
    desc: "Beautiful animated personal portfolio using React & Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-slate-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/60 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400">{proj.name}</h3>
            <p className="text-sm text-gray-300 my-3">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-blue-500 text-blue-300 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
