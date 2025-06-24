import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-16 bg-slate-800 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 mb-10 max-w-xl mx-auto"
      >
        Have a project in mind or just want to say hello? Let's connect!
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-xl mx-auto grid gap-4 text-left"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded font-medium text-white"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
