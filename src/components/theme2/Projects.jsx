import { motion } from 'framer-motion';

const projects = [
  {
    title: "Food Delivery App",
    desc: "A full-stack food ordering app with real-time order updates.",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "Portfolio Website",
    desc: "Personal animated website built with React & Framer Motion.",
    tech: "React, Tailwind CSS",
  },
  {
    title: "Chat App",
    desc: "Real-time chat app using Socket.IO and Express backend.",
    tech: "React, Node.js, Socket.IO",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-sky-100 via-yellow-100 to-pink-100"
    >
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">
        My <span className="text-pink-600">Projects</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-pink-400 transition p-6"
          >
            <h3 className="text-xl font-bold text-pink-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.desc}</p>
            <p className="text-sm text-indigo-700 font-medium">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
