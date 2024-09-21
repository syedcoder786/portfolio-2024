"use client";
import CertificationSection from "@/components/CertificationSection";
import Hero from "@/components/Hero";
import HorizontalCardsGrid from "@/components/HorizontalCardsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <Hero />
      <CertificationSection />
      <HorizontalCardsGrid />
      <SkillsGrid />
    </motion.main>
  );
}
