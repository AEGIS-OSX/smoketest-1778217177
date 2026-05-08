"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

type FormValues = {
  firstName: string;
  email: string;
  consent: boolean;
};

type SignupPayload = {
  email: string;
  first_name: string;
  source_utm: string;
  consent_timestamp: string;
};

export function EmailCaptureSection() {
  const [values, setValues] = useState<FormValues>({ firstName: "", email: "", consent: false });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sourceUtm = useMemo(() => {
    if (typeof window === "undefined") {
      return "direct";
    }

    const params = new URLSearchParams(window.location.search);
    return params.get("utm_source") ?? params.get("utm_campaign") ?? "direct";
  }, []);

  const payload: SignupPayload = {
    email: values.email,
    first_name: values.firstName,
    source_utm: sourceUtm,
    consent_timestamp: values.consent ? new Date().toISOString() : "",
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!values.email.trim()) {
      setError("Enter your email to join the early access list.");
      return;
    }

    if (!values.consent) {
      setError("Consent is required before we can add you to the waitlist.");
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  }

  return (
    <motion.section
      id="legal"
      className="pw-section pw-section-dark email-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="pw-container email-grid">
        <div className="email-copy">
          <h2 className="pw-heading email-title">Get early access to PawWalk.</h2>
          <p className="pw-body email-microcopy">We need only your email and an optional first name. By signing up you agree to receive launch emails from PawWalk. We store your contact in Mailchimp and record consent for future communications. See our privacy policy at /legal.</p>
        </div>
        <div className="email-form-shell" id="thank-you">
          {submitted ? (
            <div className="email-success" role="status" aria-live="polite">
              <h3>Thank you.</h3>
              <p>Check your inbox for a confirmation email. Once verified, we will add you to the waitlist and email next steps for early access.</p>
            </div>
          ) : (
            <form className="email-form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="source_utm" value={payload.source_utm} />
              <input type="hidden" name="consent_timestamp" value={payload.consent_timestamp} />
              <div className="email-field">
                <label className="email-label" htmlFor="first_name">First name</label>
                <input
                  id="first_name"
                  name="first_name"
                  className="email-input pw-input"
                  type="text"
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(event) => setValues((current) => ({ ...current, firstName: event.target.value }))}
                  disabled={submitting}
                />
              </div>
              <div className="email-field">
                <label className="email-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  className="email-input pw-input"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                  disabled={submitting}
                  aria-describedby={error ? "email-error" : undefined}
                />
              </div>
              <label className="email-checkbox-row" htmlFor="email-consent">
                <input
                  id="email-consent"
                  name="consent"
                  className="email-checkbox pw-checkbox"
                  type="checkbox"
                  required
                  checked={values.consent}
                  onChange={(event) => setValues((current) => ({ ...current, consent: event.target.checked }))}
                  disabled={submitting}
                />
                <span>I agree to receive launch emails from PawWalk and consent to the storage of my contact information. (required)</span>
              </label>
              {error ? <p className="email-error" id="email-error" role="alert">{error}</p> : null}
              <motion.button className="email-submit pw-button-primary" type="submit" disabled={submitting} whileHover={{ scale: submitting ? 1 : 1.02 }} whileTap={{ scale: submitting ? 1 : 0.98 }}>
                {submitting ? "Submitting..." : "Get Early Access"}
              </motion.button>
            </form>
          )}
          <p className="email-legal pw-small">By joining the list you consent to receive emails about PawWalk launch updates. You may remove your email at any time. We respect your privacy and record consent.</p>
        </div>
      </div>
    </motion.section>
  );
}

export default EmailCaptureSection;
