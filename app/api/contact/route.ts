import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { postSlack, postJson } from "@/lib/notify";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Bitte prüfe deine Angaben." },
      { status: 400 }
    );
  }

  const { name, firma, position, telefon, email, nachricht } = parsed.data;

  const slackText = [
    ":inbox_tray: *Neue Erstgespräch-Anfrage*",
    `*Name:* ${name}`,
    `*Firma:* ${firma}`,
    position ? `*Position:* ${position}` : null,
    `*Telefon:* ${telefon}`,
    `*E-Mail:* ${email}`,
    nachricht ? `*Nachricht:* ${nachricht}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const results = await Promise.allSettled([
    postSlack(process.env.SLACK_WEBHOOK_URL, slackText),
    postJson(process.env.CONTACT_ZAPIER_WEBHOOK_URL, {
      name,
      firma,
      position,
      telefon,
      email,
      nachricht,
      quelle: "wachstumshandwerk.de – Kontaktformular",
    }),
  ]);

  const anyDelivered = results.some(
    (r) => r.status === "fulfilled" && r.value.ok
  );
  const bothSkipped = results.every(
    (r) => r.status === "fulfilled" && "skipped" in r.value && r.value.skipped
  );

  // Only fail the request if a webhook was actually configured and failed.
  // With nothing configured yet (local/dev), we still confirm success to the user.
  if (!anyDelivered && !bothSkipped) {
    return NextResponse.json(
      { error: "Deine Anfrage konnte nicht zugestellt werden. Bitte versuch es später erneut." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
