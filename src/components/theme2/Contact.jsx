import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-pink-100 via-yellow-100 to-sky-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-indigo-800 mb-10"
      >
        Contact <span className="text-pink-600">Me</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full border border-pink-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-pink-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message..."
            rows={4}
            className="w-full border border-pink-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-pink-500">
          <a
            href="mailto:kuldeep@example.com"
            aria-label="Email"
            className="hover:text-indigo-600"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919000000000"
            aria-label="Phone"
            className="hover:text-indigo-600"
          >
            <FaPhone />
          </a>
          <a
            href="https://github.com/kuldeeparya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kuldeeparya"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
