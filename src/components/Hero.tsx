import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      {/* Contenido principal */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-6 py-32 relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold text-white" variants={fadeInUp}>
          Building the Future
          <span className="block text-blue-400">One Line of Code</span>
          at a Time
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-gray-400 mt-6" variants={fadeInUp}>
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>

        {/* Botones */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8" variants={fadeInUp}>
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-full border-2 border-gray-500 text-white hover:bg-gray-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Flecha animada */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
