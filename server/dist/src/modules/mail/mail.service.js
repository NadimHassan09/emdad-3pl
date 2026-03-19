"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let MailService = class MailService {
    constructor(config) {
        this.config = config;
        this.transporter = null;
        this.fromAddress = 'noreply@emdad-3pl.com';
        this.initTransporter();
    }
    initTransporter() {
        const host = this.config.get('SMTP_HOST');
        const portRaw = this.config.get('SMTP_PORT');
        const port = portRaw ? parseInt(portRaw, 10) : 587;
        const user = this.config.get('SMTP_USER');
        const pass = this.config.get('SMTP_PASS');
        const from = this.config.get('SMTP_FROM');
        if (from)
            this.fromAddress = from;
        if (host && user && pass) {
            this.transporter = nodemailer.createTransport({
                host,
                port: Number.isNaN(port) ? 587 : port,
                secure: port === 465,
                auth: { user, pass },
            });
        }
        else {
            this.transporter = null;
        }
    }
    isConfigured() {
        return this.transporter !== null;
    }
    async sendInvitationEmail(options) {
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
        }
        catch (err) {
            console.error('[MailService] Failed to send invitation email:', err);
            throw err;
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map