import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an."),
  firma: z.string().trim().min(2, "Bitte gib deinen Firmennamen an."),
  position: z.string().trim().optional().default(""),
  telefon: z.string().trim().min(6, "Bitte gib eine Telefonnummer an."),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an."),
  nachricht: z.string().trim().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an."),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an."),
  telefon: z.string().trim().min(6, "Bitte gib eine Telefonnummer an."),
  rolle: z.string().trim().optional().default(""),
  nachricht: z.string().trim().optional().default(""),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
