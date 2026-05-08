"use client";

import { motion } from "framer-motion";
import ProjectImage from "@/app/components/ProjectImage";

const testimonials = [
  "\"PawWalk made my mornings manageable again. The walker arrived on time and sent a quick photo. I'll sign up when they launch in my neighborhood.\" — Maya, West Village. [Placeholder]",
  "\"Finally, a dog-walking option that respects my schedule. Straightforward booking and clear follow-up messages.\" — Jordan, Capitol Hill. [Placeholder]",
  "\"I liked the care notes after each walk. It felt like someone was watching out for my dog, not just ticking a box.\" — Priya, Logan Circle. [Placeholder]",
];

export function TestimonialsSection() {
  return (
    <motion.section
      id="support"
      className="pw-section pw-section-light testimonials-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="pw-container testimonials-grid">
        <div className="testimonials-intro">
          <p className="pw-eyebrow testimonials-label">What early customers expect</p>
          <h2 className="pw-heading testimonials-title">Proof should sound human.</h2>
          <p className="pw-body testimonials-copy">Early demand should be measured in specific moments, not generic praise.</p>
        </div>
        <motion.div className="testimonials-media pw-image-frame" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ProjectImage id="social_proof" className="testimonials-image" />
        </motion.div>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              className="testimonial-quote pw-quote"
              key={testimonial}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
            >
              <p className="testimonial-text">{testimonial}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TestimonialsSection;
