// app/api/send-email/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});

export async function POST(req: Request) {
    const body = await req.json();
    const { to, subject, html } = body;

    try {
        const info = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html,
        });

        return NextResponse.json({ success: true, data: info });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
