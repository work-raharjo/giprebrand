"use client";

import { useState } from "react";
import { waLink } from "./Chrome";

export default function LeadForm({ fields, note, ctaLabel, verticalName }) {
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
      if (!values[f.label] || !values[f.label].trim()) next[f.label] = "Wajib diisi";
    });
    if (!values.kontak || !values.kontak.trim()) next.kontak = "Wajib diisi";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = fields.map((f) => `${f.label}: ${values[f.label]}`);
    lines.push(`Kontak: ${values.kontak}`);
    const message = `Halo GIP, saya ingin menanyakan ${verticalName}.\n\n${lines.join("\n")}`;
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
              placeholder={f.placeholder}
              value={values[f.label] || ""}
              onChange={(e) => set(f.label, e.target.value)}
            />
            {errors[f.label] ? <div className="form-error">{errors[f.label]}</div> : null}
          </div>
        ))}
        <div className="field">
          <label htmlFor="kontak">Nama dan nomor yang bisa dihubungi</label>
          <input
            id="kontak"
            type="text"
            placeholder="Budi, 0812 3456 7890"
            value={values.kontak || ""}
            onChange={(e) => set("kontak", e.target.value)}
          />
          {errors.kontak ? <div className="form-error">{errors.kontak}</div> : null}
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
          Ringkasan permintaan sudah disiapkan di WhatsApp. Jika jendela tidak terbuka, silakan izinkan popup lalu coba lagi.
        </p>
      ) : null}
    </div>
  );
}
