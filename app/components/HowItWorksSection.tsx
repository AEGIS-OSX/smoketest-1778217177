"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Sign up",
    body: "1. Sign up for early access. Enter your email and preferred neighborhood times.",
  },
  {
    label: "Match",
    body: "2. We match you with a local, vetted walker when a slot opens.",
  },
  {
    label: "Updates",
    body: "3. Receive live updates during the walk, and a summary when it’s done.",
  },
];

export function HowItWorksSection() {
  return (
    <motion.section
      id="about"
      className="pw-section pw-section-dark how-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pw-container how-grid">
        <div className="how-intro">
          <p className="pw-eyebrow how-eyebrow">How it works</p>
          <h2 className="pw-heading how-title">Reliable help, with fewer moving parts.</h2>
          <p className="pw-body how-copy">A short path from signup to a calmer day.</p>
        </div>
        <div className="how-timeline">
          {steps.map((step, index) => (
            <motion.div
              className="how-step"
              key={step.body}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
            >
              <p className="pw-meta how-step-label">{step.label}</p>
              <p className="how-step-text">{step.body}</p>
            </motion.div>
          ))}
          <p className="how-closing">
            PawWalk matches urban dog owners with vetted, insured local walkers. We prioritize reliable service, clear pricing, and respectful communication.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default HowItWorksSection;