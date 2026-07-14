import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email } = body;

        if (!firstName || !lastName || !email) {
            return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
        }

        // Webhook'a (Google Sheets) gönder
        if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
            try {
                await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        firstName, 
                        lastName, 
                        email, 
                        date: new Date().toISOString() 
                    })
                });
            } catch (webhookError) {
                console.error("Webhook Error:", webhookError);
                // Hata olsa bile e-posta gönderimine devam et
            }
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

        // Admin Mail
        const adminMailOptions = {
            from: `"Allplan Lisans" <${process.env.SMTP_USER}>`,
            to: "info@aluplan.com.tr",
            subject: `Deklarasyon Formu Başvurusu: ${firstName} ${lastName}`,
            html: `
                <h2>Deklarasyon Formu Başvurusu</h2>
                <p><strong>Ad:</strong> ${firstName}</p>
                <p><strong>Soyad:</strong> ${lastName}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <br/>
                <p><strong>📊 İstatistikler:</strong> Tüm listeyi görmek için <a href="${process.env.GOOGLE_SHEETS_VIEW_URL || '#'}">Google Sheets Tablosuna</a> tıklayabilirsiniz.</p>
            `,
        };

        // User Mail
        const userMailOptions = {
            from: `"Allplan Lisans" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Deklarasyon Formu ve Lisans Bilgileri`,
            html: `
                <h2>Merhaba ${firstName} ${lastName},</h2>
                <p>Allplan Deklarasyon Formu talebiniz (1. Aşama) alınmıştır.</p>
                <p>Web sitemizdeki adımları tamamlayıp formu imzalayarak bize iletmeniz gerekmektedir.</p>
                <p>Aşağıdaki bağlantıya tıklayarak deklarasyon formunun boş bir örneğini bilgisayarınıza indirebilirsiniz:</p>
                <p><a href="https://aluplan.com.tr/docs/Declaration_Allplan_2021-06-01.pdf">Deklarasyon Formunu İndir (PDF)</a></p>
                <br/>
                <p>İmzaladığınız formu <a href="https://www.allplan.net.tr">destek platformumuz</a> üzerinden bize iletebilirsiniz.</p>
                <br/>
                <p>Saygılarımızla,<br/>Aluplan Destek Ekibi</p>
            `,
        };

        const info = await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json({ success: true, messageId: info[0].messageId });
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
    }
}
