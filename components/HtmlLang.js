"use client";

import { useEffect } from "react";

// Root layout hanya ada satu, sehingga atribut lang pada <html> tidak bisa
// berbeda per rute secara server-side. Komponen ini menyetelnya di klien agar
// pembaca layar memakai bahasa yang benar. Sinyal untuk mesin pencari tetap
// dibawa oleh anotasi hreflang dan og:locale yang dirender di server.
export default function HtmlLang({ lang }) {
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
