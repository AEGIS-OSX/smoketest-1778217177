"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const textReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <motion.section
      id="homepage"
      className="pw-section pw-section-dark hero-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pw-container hero-grid">
        <div className="hero-copy">
          <motion.p
            className="pw-eyebrow hero-eyebrow"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.05}
          >
            PawWalk
          </motion.p>

          <motion.h1
            className="pw-display hero-title"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.15}
          >
            PawWalk: Walks that arrive on your schedule.
          </motion.h1>

          <motion.p
            className="pw-body hero-subheadline"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.25}
          >
            Local walkers, vetted and insured. Flexible times, live walk updates, and clear pricing. Join the waitlist for early access.
          </motion.p>

          <motion.a
            href="#thank-you"
            className="pw-button-primary hero-cta"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.35}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Early Access
          </motion.a>

          <motion.p
            className="pw-small hero-microcopy"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.45}
          >
            We send launch details and occasional updates. No spam. You can unsubscribe at any time.
          </motion.p>
        </div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ProjectImage id="hero" className="hero-image" />
        </motion.div>
      </div>
    </motion.section>
  );
}
