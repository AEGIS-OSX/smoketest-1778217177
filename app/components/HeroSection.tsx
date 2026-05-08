"use client";

import { motion } from "framer-motion";
import ProjectImage from "@/app/components/ProjectImage";

export function HeroSection() {
  return (
    <motion.section
      id="homepage"
      className="pw-section pw-section-dark hero-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="pw-container hero-grid">
        <div className="hero-copy">
          <motion.p className="pw-eyebrow hero-eyebrow" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}>
            PawWalk
          </motion.p>
          <motion.h1 className="pw-display hero-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}>
            PawWalk: Walks that arrive on your schedule.
          </motion.h1>
          <motion.p className="pw-body hero-subheadline" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}>
            Local walkers, vetted and insured. Flexible times, live walk updates, and clear pricing. Join the waitlist for early access.
          </motion.p>
          <motion.a
            href="#thank-you"
            className="pw-button-primary hero-cta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Early Access
          </motion.a>
          <motion.p className="pw-small hero-microcopy" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}>
            We send launch details and occasional updates. No spam. You can unsubscribe at any time.
          </motion.p>
        </div>
        <motion.div className="hero-media pw-image-frame" initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}>
          <ProjectImage id="hero" className="hero-image" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
