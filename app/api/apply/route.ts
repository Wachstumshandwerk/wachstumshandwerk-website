import { NextRequest, NextResponse } from "next/server";
import { applicationSchema, MAX_CV_SIZE_BYTES } from "@/lib/validation";
import { postSlack, postFormData } from "@/lib/notify";

export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = applicationSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Bitte prüfe deine Angaben." },
      { status: 400 }
    );
  }
  const { name, email, telefon, rolle, nachricht } = parsed.data;

  const cv = formData.get("lebenslauf");
  if (cv instanceof File && cv.size > 0) {
    if (cv.type !== "application/pdf") {
      return NextResponse.json({ error: "Der Lebenslauf muss eine PDF-Datei sein." }, { status: 400 });
    }
    if (cv.size > MAX_CV_SIZE_BYTES) {
      return NextResponse.json({ error: "Die Datei ist zu groß (max. 5 MB)." }, { status: 400 });
    }
  }

  const slackText = [
    ":briefcase: *Neue Bewerbung*",
    `*Name:* ${name}`,
    `*E-Mail:* ${email}`,
    `*Telefon:* ${telefon}`,
    rolle ? `*Rolle:* ${rolle}` : "*Rolle:* Initiativbewerbung",
    nachricht ? `*Nachricht:* ${nachricht}` : null,
    cv instanceof File && cv.size > 0 ? `*Lebenslauf:* ${cv.name} beigefügt` : "*Lebenslauf:* keiner beigefügt",
  ]
    .filter(Boolean)
    .join("\n");

  const zapierForm = new FormData();
  zapierForm.set("name", name);
  zapierForm.set("email", email);
  zapierForm.set("telefon", telefon);
  zapierForm.set("rolle", rolle || "Initiativbewerbung");
  zapierForm.set("nachricht", nachricht || "");
  zapierForm.set("quelle", "wachstumshandwerk.de – Karriereseite");
  if (cv instanceof File && cv.size > 0) {
    zapierForm.set("lebenslauf", cv, cv.name);
  }

  const results = await Promise.allSettled([
    postSlack(process.env.SLACK_WEBHOOK_URL, slackText),
    postFormData(process.env.APPLICATION_ZAPIER_WEBHOOK_URL, zapierForm),
  ]);

  const anyDelivered = results.some((r) => r.status === "fulfilled" && r.value.ok);
  const bothSkipped = results.every(
    (r) => r.status === "fulfilled" && "skipped" in r.value && r.value.skipped
  );

  if (!anyDelivered && !bothSkipped) {
    return NextResponse.json(
      { error: "Deine Bewerbung konnte nicht zugestellt werden. Bitte versuch es später erneut." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
