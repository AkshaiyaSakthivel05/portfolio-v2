import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    const now = Date.now();
    const timestamps = (rateLimitStore.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    if (timestamps.length >= RATE_LIMIT) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        { status: 429 }
      );
    }
    rateLimitStore.set(ip, [...timestamps, now]);

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.log('[Contact Form] Dev mode — RESEND_API_KEY not set. Submission received from:', email);
      return NextResponse.json({ success: true, dev: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['aks05.sk.ai@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080810; color: #f8fafc; padding: 32px; border-radius: 12px; border: 1px solid rgba(99,102,241,0.3);">
          <h2 style="color: #6366f1; margin-bottom: 4px;">New Portfolio Message</h2>
          <p style="color: #94a3b8; margin-top: 0; font-size: 14px;">Via akshaiya.dev contact form</p>

          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr><td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 80px;">From</td>
                <td style="padding: 8px 0; color: #f8fafc; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Subject</td>
                <td style="padding: 8px 0; color: #f8fafc;">${subject}</td></tr>
          </table>

          <div style="background: #0f0f1a; border: 1px solid rgba(99,102,241,0.2); border-radius: 8px; padding: 20px; margin-top: 8px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="color: #f8fafc; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #4b5563; font-size: 12px; margin-top: 24px; text-align: center;">
            Sent from Akshaiya Sakthivel's Portfolio · Reply directly to ${email}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
