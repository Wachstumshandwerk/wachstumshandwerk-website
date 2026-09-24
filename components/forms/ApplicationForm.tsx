"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const MAX_SIZE_MB = 5;

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const file = formData.get("lebenslauf");
    if (file instanceof File && file.size > 0) {
      if (file.type !== "application/pdf") {
        setStatus("error");
        setErrorMessage("Der Lebenslauf muss eine PDF-Datei sein.");
        return;
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setStatus("error");
        setErrorMessage(`Die Datei darf maximal ${MAX_SIZE_MB} MB groß sein.`);
        return;
      }
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Etwas ist schiefgelaufen. Bitte versuch es erneut.");
      }

      setStatus("success");
      form.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-akzent/30 bg-akzent/10 p-8 text-center">
        <p className="text-lg font-semibold text-tannengruen">
          Danke für deine Bewerbung!
        </p>
        <p className="mt-2 text-[15px] text-text/70">
          Wir melden uns so schnell wie möglich bei dir zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" encType="multipart/form-data">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="E-Mail" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon" name="telefon" type="tel" required autoComplete="tel" />
        <div className="flex flex-col gap-2">
          <label htmlFor="rolle" className="text-sm font-semibold text-tannengruen">
            Gewünschte Rolle (optional)
          </label>
          <select
            id="rolle"
            name="rolle"
            className="rounded-xl border border-tannengruen/20 bg-white px-4 py-3 text-[15px] text-text outline-none focus:border-akzent"
          >
            <option value="">Initiativbewerbung</option>
            <option value="Telesales Mitarbeiter">Telesales Mitarbeiter</option>
            <option value="Mitarbeiter im Vertriebsinnendienst">
              Mitarbeiter im Vertriebsinnendienst
            </option>
            <option value="Telefonverkäufer">Telefonverkäufer</option>
            <option value="Closer">Closer</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nachricht" className="text-sm font-semibold text-tannengruen">
          Nachricht (optional)
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          className="rounded-xl border border-tannengruen/20 bg-white px-4 py-3 text-[15px] text-text outline-none focus:border-akzent"
          placeholder="Erzähl uns kurz von dir."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lebenslauf" className="text-sm font-semibold text-tannengruen">
          Lebenslauf (PDF, optional, max. {MAX_SIZE_MB} MB)
        </label>
        <label
          htmlFor="lebenslauf"
          className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-tannengruen/30 bg-white px-4 py-3 text-[15px] text-text/70 hover:border-akzent"
        >
          <span>{fileName || "PDF auswählen …"}</span>
          <span className="text-xs font-semibold uppercase tracking-wide text-akzent">
            Durchsuchen
          </span>
        </label>
        <input
          id="lebenslauf"
          name="lebenslauf"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-akzent px-6 py-3.5 text-[15px] font-semibold text-tannengruen-dark transition-colors hover:brightness-95 disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet …" : "Bewerbung absenden"}
      </button>

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
        className="rounded-xl border border-tannengruen/20 bg-white px-4 py-3 text-[15px] text-text outline-none focus:border-akzent"
      />
    </div>
  );
}
