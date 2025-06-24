import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-sky-100 via-yellow-100 to-pink-100 flex flex-col justify-center items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-6"
      >
        About <span className="text-pink-600">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-gray-700 text-lg sm:text-xl leading-relaxed"
      >
        I'm <span className="font-semibold text-indigo-700">Kuldeep Singh Arya</span>, a passionate full stack developer experienced in building responsive and interactive web apps using:
      </motion.p>

      {/* Tech Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-10 text-5xl"
      >
        {[
          { icon: <FaReact />, label: 'React', color: 'text-blue-600' },
          { icon: <FaNodeJs />, label: 'Node.js', color: 'text-green-700' },
          { icon: <SiExpress />, label: 'Express', color: 'text-black' },
          { icon: <SiMongodb />, label: 'MongoDB', color: 'text-green-600' },
          { icon: <FaHtml5 />, label: 'HTML', color: 'text-orange-500' },
          { icon: <FaCss3Alt />, label: 'CSS', color: 'text-blue-500' },
          { icon: <FaJs />, label: 'JavaScript', color: 'text-yellow-500' },
          { icon: <FaDatabase />, label: 'SQL', color: 'text-purple-600' },
        ].map((tech, i) => (
          <div key={i} className={`flex flex-col items-center ${tech.color}`}>
            {tech.icon}
            <span className="text-sm mt-2">{tech.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-gray-700 text-lg sm:text-xl leading-relaxed"
      >
        I love crafting smooth user experiences, exploring new tech, learning UI/UX, and building full-stack apps that not only work great but also look amazing.
      </motion.p>
    </section>
  );
}
