"use client";

import { motion } from "framer-motion";
import ProjectImage from "@/app/components/ProjectImage";

const features = [
  {
    heading: "Flexible scheduling",
    body: "Pick the times that fit your commute and day. Request single walks or add yourself to a preferred time waitlist, then we match a local walker when slots open.",
    imageId: "feature_1",
    reverse: false,
  },
  {
    heading: "Vetted walkers, insured service",
    body: "Every walker is screened and covered. We verify identity, references, and insurance so you do not have to. Simple trust, unchanged by marketing badges.",
    imageId: "feature_2",
    reverse: true,
  },
  {
    heading: "Real-time walk updates",
    body: "See when walks start, what route your dog took, and a quick photo at the end. Live updates keep you informed without demanding your attention.",
    imageId: "feature_3",
    reverse: false,
  },
];

export function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="pw-section pw-section-light features-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="pw-container">
        <div className="features-intro">
          <h2 className="pw-heading features-title">Built for city schedules and calmer walks.</h2>
          <p className="pw-body features-copy">Everything important is clear before you book.</p>
        </div>
        <div>
          {features.map((feature, index) => (
            <motion.div
              key={feature.heading}
              className={`feature-row${feature.reverse ? " feature-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <div className="feature-panel">
                <h3 className="feature-heading">{feature.heading}</h3>
                <p className="feature-body">{feature.body}</p>
              </div>
              <div className="feature-media pw-image-frame">
                <ProjectImage id={feature.imageId} className="feature-image" />
              </div>
            </motion.div>
          ))}
          <motion.div
            className="feature-row feature-text-only"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
          >
            <div className="feature-panel">
              <h3 className="feature-heading">Transparent pricing and easy canceling</h3>
              <p className="feature-body">Clear per-walk pricing, no surprise fees. Pay for the walks you book, or hold a spot on the waitlist with no subscription required.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturesSection;
