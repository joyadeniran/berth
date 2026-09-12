import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const budget = String(body.budget || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — campaign request dropped:", { name, email, company });
    return NextResponse.json(
      { error: "Campaign requests aren't wired up yet — email holla@berthtech.com directly for now." },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "holla@berthtech.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Berth Website <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New campaign request — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Budget: ${budget || "—"}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) {
      console.error("Resend rejected the campaign request email:", error);
      return NextResponse.json({ error: "Something went wrong sending your request. Try again shortly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send campaign request email:", err);
    return NextResponse.json({ error: "Something went wrong sending your request. Try again shortly." }, { status: 502 });
  }
}
