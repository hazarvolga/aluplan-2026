import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email } = body;

        if (!firstName || !lastName || !email) {
            return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: "destek@allplan.net.tr", // Uses the verified domain in your Resend account
            to: ["info@aluplan.com.tr"],
            subject: `Talep ve Beyan Yeni Allplan Lisansının Etkinleştirilmesi Formu dolduran kişinin adı soyadı: ${firstName} ${lastName} mail bilgisi: ${email}`,
            html: `
                <h2>Yeni Lisans Etkinleştirme Talebi Başlangıcı</h2>
                <p><strong>Ad:</strong> ${firstName}</p>
                <p><strong>Soyad:</strong> ${lastName}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p>Bu kullanıcı, yeni Allplan lisansı etkinleştirmesi talebinde bulunmak için sihirbazı başlattı.</p>
            `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Email Sending Error:", error);
        return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
    }
}
