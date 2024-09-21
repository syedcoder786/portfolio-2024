"use client";
import { motion, Variants, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
interface SkillsCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsCard: React.FC<SkillsCardProps> = ({
  title,
  description,
  icon,
}) => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // const controls = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  return (
    <motion.div
      // ref={ref}
      variants={cardVariants}
      // initial="hidden"
      // animate={controls}
      // transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default SkillsCard;
