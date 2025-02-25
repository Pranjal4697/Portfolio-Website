import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { senderEmail, message } = await req.json();

    if (!senderEmail || !message) {
      return NextResponse.json(
        { error: "Please provide both email and message" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'pranjal4697@gmail.com', // Your email address
      replyTo: senderEmail,
      subject: 'New Contact Form Submission',
      react: EmailTemplate({ senderEmail, message }) as React.ReactElement,
    });

    if (data.error) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
} 