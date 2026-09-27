"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Etwas ist schiefgelaufen. Bitte versuch es erneut.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-akzent/30 bg-akzent/10 p-8 text-center"
      >
        <p className="text-lg font-semibold text-tannengruen">
          Danke! Deine Anfrage ist bei uns angekommen.
        </p>
        <p className="mt-2 text-[15px] text-text/70">
          Jemand aus unserem Team meldet sich in Kürze bei dir, um einen Termin zu finden.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Firma" name="firma" required autoComplete="organization" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Position" name="position" autoComplete="organization-title" />
        <Field label="Telefon" name="telefon" type="tel" required autoComplete="tel" />
      </div>
      <Field label="E-Mail" name="email" type="email" required autoComplete="email" />
      <div className="flex flex-col gap-2">
        <label htmlFor="nachricht" className="text-sm font-semibold text-tannengruen">
          Nachricht (optional)
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          className="rounded-xl border border-tannengruen/20 bg-white px-4 py-3 text-[15px] text-text outline-none transition-colors duration-200 focus:border-akzent"
          placeholder="Erzähl uns kurz von deinem Betrieb und deiner aktuellen Situation."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="inline-flex items-center justify-center rounded-full bg-akzent px-6 py-3.5 text-[15px] font-semibold text-tannengruen-dark transition-colors hover:brightness-95 disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet …" : "Kostenloses Erstgespräch anfragen"}
      </motion.button>

      <p className="text-xs leading-relaxed text-muted">
        Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer{" "}
        <a href="/datenschutz" className="underline">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-tannengruen">
        {label}
        {required && <span className="text-akzent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-xl border border-tannengruen/20 bg-white px-4 py-3 text-[15px] text-text outline-none transition-colors duration-200 focus:border-akzent"
      />
    </div>
  );
}
