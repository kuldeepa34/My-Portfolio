import { motion } from 'framer-motion';

const journeyData = [
  {
    year: "2017 - 2021",
    title: "B.Tech in Computer Science",
    desc: "Graduated from XYZ University with strong foundation in programming and web development.",
  },
  {
    year: "2021 - 2023",
    title: "Frontend Developer @ TIMS Project",
    desc: "Worked with Angular, integrated real-time telecom data, dashboards, reports, and alarms.",
  },
  {
    year: "2023 - Present",
    title: "Full Stack Developer",
    desc: "Working with React, Node.js, MongoDB, REST APIs. Building scalable solutions and leading frontend initiatives.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="min-h-screen px-6 py-16 bg-slate-800 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-3xl mx-auto border-l-2 border-blue-500 pl-8 space-y-14">
        {journeyData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-blue-300">{item.year}</p>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
