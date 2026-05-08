"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FooterSection() {
  return (
    <motion.footer
      className="pw-section pw-section-light footer-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="pw-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h2 className="footer-heading">About</h2>
            <p className="footer-copy">PawWalk matches urban dog owners with vetted, insured local walkers. We prioritize reliable service, clear pricing, and respectful communication.</p>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Support</h2>
            <p className="footer-copy">Help center, FAQs, and contact options at /support.</p>
            <Link className="footer-link pw-link" href="/support">/support</Link>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Legal</h2>
            <p className="footer-copy">Privacy, Terms, and data requests are available at /legal.</p>
            <Link className="footer-link pw-link" href="/legal">/legal</Link>
          </div>
        </div>
        <p className="footer-legal pw-small">By joining the list you consent to receive emails about PawWalk launch updates. You may remove your email at any time. We respect your privacy and record consent.</p>
      </div>
    </motion.footer>
  );
}

export default FooterSection;
