"use client";

import { useState } from "react";
import { waLink } from "./Chrome";

export default function LeadForm({ fields, note, ctaLabel, verticalName, copy }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key, val) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = () => {
    const next = {};
    fields.forEach((f) => {
      if (!values[f.label] || !values[f.label].trim()) next[f.label] = copy.required;
    });
    if (!values.contact || !values.contact.trim()) next.contact = copy.required;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = fields.map((f) => `${f.label}: ${values[f.label]}`);
    lines.push(`${copy.contactKey}: ${values.contact}`);
    const message = `${copy.greetingLine}\n\n${lines.join("\n")}`;
    window.open(waLink(message), "_blank", "noopener");
    setSent(true);
  };

  return (
    <div className="form-card">
      <div className="grid grid-2">
        {fields.map((f) => (
          <div className="field" key={f.label}>
            <label htmlFor={f.label}>{f.label}</label>
            <input
              id={f.label}
              type="text"
              className={errors[f.label] ? "is-error" : ""}
              placeholder={f.placeholder}
              value={values[f.label] || ""}
              onChange={(e) => set(f.label, e.target.value)}
            />
            <div className="form-error">{errors[f.label] || ""}</div>
          </div>
        ))}
        <div className="field">
          <label htmlFor="contact">{copy.contactLabel}</label>
          <input
            id="contact"
            type="text"
            className={errors.contact ? "is-error" : ""}
            placeholder={copy.contactPlaceholder}
            value={values.contact || ""}
            onChange={(e) => set("contact", e.target.value)}
          />
          <div className="form-error">{errors.contact || ""}</div>
        </div>
      </div>

      <div className="form-foot">
        <span className="form-note">{note}</span>
        <button type="button" className="btn btn-solid" onClick={submit}>
          {ctaLabel}
        </button>
      </div>

      {sent ? (
        <p className="form-status" style={{ color: "var(--accent-dark)" }}>
          {copy.sent}
        </p>
      ) : null}
    </div>
  );
}
