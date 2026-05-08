"use client";

import { motion } from "framer-motion";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

type FormValues = {
  first_name: string;
  email: string;
};

type FormErrors = Partial<Record<"email" | "consent", string>>;

type SignupPayload = {
  email: string;
  first_name: string;
  source_utm: string;
  consent_timestamp: string;
};

const formVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function getSourceAttribution(): string {
  const searchParams = new URLSearchParams(window.location.search);
  const attributionKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "ref",
  ];

  const capturedParams = new URLSearchParams();

  attributionKeys.forEach((key) => {
    const value = searchParams.get(key);

    if (value) {
      capturedParams.set(key, value);
    }
  });

  const capturedAttribution = capturedParams.toString();

  return capturedAttribution || "direct";
}

export default function EmailCaptureSection() {
  const [values, setValues] = useState<FormValues>({
    first_name: "",
    email: "",
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sourceUtm, setSourceUtm] = useState("direct");
  const [consentTimestamp, setConsentTimestamp] = useState("");
  const [signupPayload, setSignupPayload] = useState<SignupPayload | null>(null);

  useEffect(() => {
    setSourceUtm(getSourceAttribution());
  }, []);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement & {
      name: keyof FormValues;
    };

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (name === "email" && errors.email) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        email: undefined,
      }));
    }
  };

  const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConsentChecked(event.target.checked);

    if (errors.consent) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        consent: undefined,
      }));
    }
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!values.email.trim()) {
      nextErrors.email = "Enter your email address.";
    }

    if (!consentChecked) {
      nextErrors.consent = "Consent is required before joining the list.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const nextConsentTimestamp = new Date().toISOString();
    const nextPayload: SignupPayload = {
      email: values.email.trim(),
      first_name: values.first_name.trim(),
      source_utm: sourceUtm,
      consent_timestamp: nextConsentTimestamp,
    };

    setSubmitting(true);
    setConsentTimestamp(nextConsentTimestamp);
    setSignupPayload(nextPayload);

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 400);
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  const currentPayload = signupPayload ?? {
    email: values.email,
    first_name: values.first_name,
    source_utm: sourceUtm,
    consent_timestamp: consentTimestamp,
  };

  return (
    <motion.section
      id="legal"
      className="pw-section pw-section-dark email-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="email-grid">
        <motion.div
          className="email-copy"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 className="email-title" variants={formItemVariants}>
            Get early access to PawWalk.
          </motion.h2>
          <motion.p className="email-microcopy" variants={formItemVariants}>
            We need only your email and an optional first name. By signing up you agree to receive launch emails from PawWalk. We store your contact in Mailchimp and record consent for future communications. See our privacy policy at /legal.
          </motion.p>
        </motion.div>

        <motion.div
          id="thank-you"
          className="email-form-shell"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {submitted ? (
            <motion.div
              className="email-success"
              variants={formItemVariants}
              role="status"
              aria-live="polite"
            >
              <h3>Thank you.</h3>
              <p>
                Check your inbox for a confirmation email. Once verified, we will add you to the waitlist and email next steps for early access.
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="email-form"
              onSubmit={handleSubmit}
              variants={formVariants}
              noValidate
            >
              <input
                type="hidden"
                name="source_utm"
                value={currentPayload.source_utm}
                readOnly
              />
              <input
                type="hidden"
                name="consent_timestamp"
                value={currentPayload.consent_timestamp}
                readOnly
              />

              <motion.div className="email-field" variants={formItemVariants}>
                <label className="email-label" htmlFor="pawwalk-first-name">
                  First name
                </label>
                <input
                  id="pawwalk-first-name"
                  className="email-input"
                  type="text"
                  name="first_name"
                  autoComplete="given-name"
                  value={values.first_name}
                  onChange={handleTextChange}
                  disabled={submitting}
                  placeholder="First name"
                />
              </motion.div>

              <motion.div className="email-field" variants={formItemVariants}>
                <label className="email-label" htmlFor="pawwalk-email">
                  Email
                </label>
                <input
                  id="pawwalk-email"
                  className="email-input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleTextChange}
                  disabled={submitting}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "pawwalk-email-error" : undefined}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="pawwalk-email-error" className="email-error" role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </motion.div>

              <motion.div className="email-checkbox-row" variants={formItemVariants}>
                <input
                  id="pawwalk-consent"
                  className="email-checkbox"
                  type="checkbox"
                  name="consent"
                  checked={consentChecked}
                  onChange={handleConsentChange}
                  disabled={submitting}
                  required
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "pawwalk-consent-error" : undefined}
                />
                <label className="email-label" htmlFor="pawwalk-consent">
                  I agree to receive launch emails from PawWalk and consent to the storage of my contact information. (required)
                </label>
              </motion.div>

              {errors.consent ? (
                <motion.p
                  id="pawwalk-consent-error"
                  className="email-error"
                  role="alert"
                  variants={formItemVariants}
                >
                  {errors.consent}
                </motion.p>
              ) : null}

              <motion.button
                className="email-submit"
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                whileHover={submitting ? undefined : { scale: 1.02 }}
                whileTap={submitting ? undefined : { scale: 0.98 }}
                variants={formItemVariants}
              >
                Get Early Access
              </motion.button>
            </motion.form>
          )}

          <p className="email-legal">
            By joining the list you consent to receive emails about PawWalk launch updates. You may remove your email at any time. We respect your privacy and record consent.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
