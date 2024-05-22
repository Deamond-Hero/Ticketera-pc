import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export const config = {
//   runtime: "edge", // Configuración para usar la API en el entorno Edge
// };

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const { emailUser, message } = await request.json();

  try {
    const response = await resend.emails.send({
      cc: [],
      to: emailUser,
      bcc: [],
      from: "onboarding@resend.dev",
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
    
    <div style="background-color: #004080; color: white; padding: 20px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
        <img src="url_del_logo.png" alt="Logo" style="width: 100px; height: auto; margin-bottom: 20px;" />
        <h1 style="margin: 0;">Estado de Tu Equipo</h1>
    </div>

    
    <div style="padding: 20px; text-align: left;">
        <p style="color: #333; font-size: 16px; line-height: 1.5;">${message}</p>
    </div>

    
    <div style="background-color: #f2f2f2; color: #666; padding: 20px; text-align: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
        <p style="margin: 0; font-size: 14px;">Este es un mensaje automatizado, por favor no responda a este correo.</p>
        <p style="margin: 10px 0 0 0; font-size: 12px;">Términos y Condiciones: Este correo electrónico y cualquier archivo adjunto pueden contener información confidencial y están destinados exclusivamente para el uso de la persona o entidad a la que se dirige. Si usted ha recibido este correo electrónico por error, por favor notifique al remitente inmediatamente y elimine este correo de su sistema. Está prohibida cualquier distribución, copia o uso de esta información sin autorización.</p>
        <p style="margin: 10px 0 0 0; font-size: 12px;">&copy; 2024 Su Empresa. Todos los derechos reservados.</p>
    </div>
</div>

    `,
      tags: [],
      subject: "Center Ticker Servicio : Estado de tu Equipo",
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}