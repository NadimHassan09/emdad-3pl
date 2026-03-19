import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

export interface SendInvitationOptions {
  to: string;
  firstName: string;
  lastName: string;
  temporaryPassword: string;
  loginUrl: string;
  roleName: string;
}

@Injectable()
export class MailService {
  private transporter: Transporter | null = null;
  private fromAddress: string = 'noreply@emdad-3pl.com';

  constructor(private readonly config: ConfigService) {
    this.initTransporter();
  }

  private initTransporter(): void {
    const host = this.config.get<string>('SMTP_HOST');
    const portRaw = this.config.get<string>('SMTP_PORT');
    const port = portRaw ? parseInt(portRaw, 10) : 587;
    const user = this.config.get<string>('SMTP_USER');
    const pass = this.config.get<string>('SMTP_PASS');
    const from = this.config.get<string>('SMTP_FROM');

    if (from) this.fromAddress = from;

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port: Number.isNaN(port) ? 587 : port,
        secure: port === 465,
        auth: { user, pass },
      });
    } else {
      this.transporter = null;
    }
  }

  isConfigured(): boolean {
    return this.transporter !== null;
  }

  async sendInvitationEmail(options: SendInvitationOptions): Promise<void> {
    if (!this.transporter) {
      console.warn('[MailService] SMTP not configured. Skipping invitation email.');
      return;
    }

    const { to, firstName, lastName, temporaryPassword, loginUrl, roleName } = options;
    const fullName = `${firstName} ${lastName}`.trim() || to;

    const html = `
<!DOCTYPE html>
<html dir="rtl">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #176C33, #104920); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
    .password-box { background: #fff; border: 1px solid #e5e7eb; padding: 12px 16px; font-family: monospace; font-size: 14px; border-radius: 6px; margin: 12px 0; }
    .btn { display: inline-block; background: #176C33; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 16px 0; }
    .footer { font-size: 12px; color: #6b7280; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0;">دعوة للانضمام</h1>
    </div>
    <div class="content">
      <p>مرحباً ${fullName}،</p>
      <p>تمت دعوتك للانضمام إلى منصة إمداد 3PL. تم إنشاء حسابك بالدور: <strong>${roleName}</strong>.</p>
      <p>كلمة المرور المؤقتة:</p>
      <div class="password-box">${temporaryPassword}</div>
      <p>يرجى تسجيل الدخول وتغيير كلمة المرور بعد أول دخول.</p>
      <p><a href="${loginUrl}" class="btn">تسجيل الدخول</a></p>
      <p class="footer">إذا لم تطلب هذه الدعوة، يرجى تجاهل هذا البريد.</p>
    </div>
  </div>
</body>
</html>
`;

    const text = `
مرحباً ${fullName}،

تمت دعوتك للانضمام إلى منصة إمداد 3PL. تم إنشاء حسابك بالدور: ${roleName}.

كلمة المرور المؤقتة: ${temporaryPassword}

يرجى تسجيل الدخول وتغيير كلمة المرور بعد أول دخول.
رابط تسجيل الدخول: ${loginUrl}

إذا لم تطلب هذه الدعوة، يرجى تجاهل هذا البريد.
`;

    try {
      await this.transporter.sendMail({
        from: this.fromAddress,
        to,
        subject: 'دعوة للانضمام - منصة إمداد 3PL',
        text,
        html,
      });
    } catch (err) {
      console.error('[MailService] Failed to send invitation email:', err);
      throw err;
    }
  }
}
