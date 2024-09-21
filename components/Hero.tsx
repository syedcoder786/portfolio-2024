"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[60vh]"
      style={{
        backgroundImage: `url(${"https://qph.cf2.quoracdn.net/main-qimg-11036d78c9a5814e760cdb2e8236c188-lq"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-start justify-center h-full px-5 relative z-10 ">
        <motion.h1
          // initial={{ opacity: 0, scale: 0 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I'm Syed Mohammed Mohdin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          className="text-lg md:text-xl text-gray-300 mb-4 md:w-2/4"
        >
          I am a passionate web developer specializing in building exceptional
          digital experiences. Currently, I’m focused on creating responsive and
          scalable web applications.
        </motion.p>
        <Link href="/contact">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.6,
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
