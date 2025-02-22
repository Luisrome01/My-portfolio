import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/me.jpg"
              alt="Piyush Agarwal"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Hi There, I'm Luis Romero, a Computer Engineering graduate from Venezuela with a passion for full-stack development and technology education. I specialize in building scalable web solutions and continuously expanding my expertise in modern development tools. I'm also dedicated to sharing knowledge with the developer community, helping others grow in their careers. Currently, I'm focused on broadening my job opportunities and contributing to innovative projects that make an impact.
            </motion.p>

            

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">3+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
