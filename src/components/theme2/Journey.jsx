import { motion } from 'framer-motion';

const journeyData = [
  {
    year: "2021",
    title: "Started Web Dev",
    description: "Began my journey learning HTML, CSS, JavaScript & React.",
  },
  {
    year: "2022",
    title: "Full Stack Projects",
    description: "Built full-stack apps using React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2023",
    title: "Real-World Experience",
    description: "Worked on enterprise projects & freelancing opportunities.",
  },
  {
    year: "2024",
    title: "Expanding Horizons",
    description: "Exploring design, animations, and mobile development with React Native.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100"
    >
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">
        My <span className="text-pink-600">Journey</span>
      </h2>

      <div className="relative border-l-4 border-pink-400 ml-4 max-w-3xl mx-auto">
        {journeyData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-10"
          >
            {/* Timeline Dot */}
            <span className="absolute left-[-10px] top-2 w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow" />

            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-pink-600">{item.year}</h3>
              <h4 className="text-lg font-bold text-indigo-800">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
