"use client"

import { motion } from "framer-motion";

const steps = [
  "1. Sign up for early access. Enter your email and preferred neighborhood times.",
  "2. We match you with a local, vetted walker when a slot opens.",
  "3. Receive live updates during the walk, and a summary when it’s done."
];

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HowItWorksSection() {
  return (
    <motion.section
      id="about"
      className="pw-section pw-section-dark how-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="how-grid">
        <div className="how-intro">
          <p className="how-eyebrow">How it works</p>
          <h2 className="how-title">Reliable help, with fewer moving parts.</h2>
          <p className="how-copy">A short path from signup to a calmer day.</p>
        </div>

        <div className="how-timeline-wrap">
          <motion.div
            className="how-timeline"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.article className="how-step" key={step} variants={stepVariants}>
                <span className="how-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="how-step-text">{step}</p>
              </motion.article>
            ))}
          </motion.div>

          <p className="how-closing">
            PawWalk matches urban dog owners with vetted, insured local walkers. We prioritize reliable service, clear pricing, and respectful communication.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
