export async function postSlack(webhookUrl: string | undefined, text: string) {
  if (!webhookUrl) return { ok: false, skipped: true };
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return { ok: res.ok, status: res.status };
}

export async function postJson(webhookUrl: string | undefined, payload: unknown) {
  if (!webhookUrl) return { ok: false, skipped: true };
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return { ok: res.ok, status: res.status };
}

export async function postFormData(webhookUrl: string | undefined, formData: FormData) {
  if (!webhookUrl) return { ok: false, skipped: true };
  const res = await fetch(webhookUrl, {
    method: "POST",
    body: formData,
  });
  return { ok: res.ok, status: res.status };
}
