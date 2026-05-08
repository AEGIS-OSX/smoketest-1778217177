"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const footerColumns = [
  {
    heading: "About",
    body: "PawWalk matches urban dog owners with vetted, insured local walkers. We prioritize reliable service, clear pricing, and respectful communication.",
    href: null,
  },
  {
    heading: "Support",
    body: "Help center, FAQs, and contact options at /support.",
    href: "/support",
  },
  {
    heading: "Legal",
    body: "Privacy, Terms, and data requests are available at /legal.",
    href: "/legal",
  },
];

export default function FooterSection() {
  return (
    <motion.footer
      className="pw-section pw-section-light footer-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.heading}>
            <h2 className="footer-heading">{column.heading}</h2>
            <p className="footer-copy">{column.body}</p>
            {column.href ? (
              <Link className="footer-link" href={column.href}>
                {column.href}
              </Link>
            ) : null}
          </div>
        ))}
      </div>
      <p className="footer-legal">
        By joining the list you consent to receive emails about PawWalk launch updates. You may remove your email at any time. We respect your privacy and record consent.
      </p>
    </motion.footer>
  );
}
