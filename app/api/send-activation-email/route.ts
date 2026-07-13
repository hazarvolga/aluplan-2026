import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email } = body;

        if (!firstName || !lastName || !email) {
            return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // TLS requires secure: false for port 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `"Allplan Lisans" <${process.env.SMTP_USER}>`,
            to: "info@aluplan.com.tr",
            subject: `Talep ve Beyan Yeni Allplan Lisansının Etkinleştirilmesi Formu dolduran kişinin adı soyadı: ${firstName} ${lastName} mail bilgisi: ${email}`,
            html: `
                <h2>Yeni Lisans Etkinleştirme Talebi</h2>
                <p><strong>Ad:</strong> ${firstName}</p>
                <p><strong>Soyad:</strong> ${lastName}</p>
                <p><strong>E-posta:</strong> ${email}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
    }
}
