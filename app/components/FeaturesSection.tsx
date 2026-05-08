"use client"

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="pw-section pw-section-light features-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pw-container">
        <motion.div
          className="features-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="pw-heading features-title" variants={fadeUpVariants}>
            Built for city schedules and calmer walks.
          </motion.h2>
          <motion.p className="pw-body features-copy" variants={fadeUpVariants}>
            Everything important is clear before you book.
          </motion.p>
        </motion.div>

        <motion.div
          className="features-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="feature-row" variants={slideRightVariants}>
            <div className="feature-media">
              <ProjectImage id="feature_1" className="feature-image" />
            </div>
            <div className="feature-panel">
              <h3 className="feature-heading">Flexible scheduling</h3>
              <p className="feature-body">
                Pick the times that fit your commute and day. Request single walks or add yourself to a preferred time waitlist, then we match a local walker when slots open.
              </p>
            </div>
          </motion.div>

          <motion.div className="feature-row feature-row-reverse" variants={slideLeftVariants}>
            <div className="feature-panel">
              <h3 className="feature-heading">Vetted walkers, insured service</h3>
              <p className="feature-body">
                Every walker is screened and covered. We verify identity, references, and insurance so you do not have to. Simple trust, unchanged by marketing badges.
              </p>
            </div>
            <div className="feature-media">
              <ProjectImage id="feature_2" className="feature-image" />
            </div>
          </motion.div>

          <motion.div className="feature-row" variants={slideRightVariants}>
            <div className="feature-media">
              <ProjectImage id="feature_3" className="feature-image" />
            </div>
            <div className="feature-panel">
              <h3 className="feature-heading">Real-time walk updates</h3>
              <p className="feature-body">
                See when walks start, what route your dog took, and a quick photo at the end. Live updates keep you informed without demanding your attention.
              </p>
            </div>
          </motion.div>

          <motion.div className="feature-row feature-text-only" variants={fadeUpVariants}>
            <div className="feature-panel">
              <h3 className="feature-heading">Transparent pricing and easy canceling</h3>
              <p className="feature-body">
                Clear per-walk pricing, no surprise fees. Pay for the walks you book, or hold a spot on the waitlist with no subscription required.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
