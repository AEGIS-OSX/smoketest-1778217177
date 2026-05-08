"use client"

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const testimonials = [
  {
    text: `"PawWalk made my mornings manageable again. The walker arrived on time and sent a quick photo. I'll sign up when they launch in my neighborhood." — Maya, West Village. [Placeholder]`,
  },
  {
    text: "\"Finally, a dog-walking option that respects my schedule. Straightforward booking and clear follow-up messages.\" — Jordan, Capitol Hill. [Placeholder]",
  },
  {
    text: "\"I liked the care notes after each walk. It felt like someone was watching out for my dog, not just ticking a box.\" — Priya, Logan Circle. [Placeholder]",
  },
];

const quoteVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + index * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function TestimonialsSection() {
  return (
    <motion.section
      id="support"
      className="pw-section pw-section-light testimonials-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="testimonials-grid">
        <motion.div
          className="testimonials-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <p className="testimonials-label">What early customers expect</p>
          <h2 className="testimonials-title">Proof should sound human.</h2>
          <p className="testimonials-copy">
            Early PawWalk interest is grounded in practical needs: punctual arrivals, clear messages, and care notes that help owners trust the person walking their dog.
          </p>
        </motion.div>

        <motion.div
          className="testimonials-media"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        >
          <ProjectImage id="social_proof" className="testimonials-image" />
        </motion.div>

        <motion.div
          className="testimonials-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              className="testimonial-quote"
              key={testimonial.text}
              custom={index}
              variants={quoteVariants}
            >
              <p className="testimonial-text">{testimonial.text}</p>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
