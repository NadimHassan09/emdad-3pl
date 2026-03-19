import { ConfigService } from '@nestjs/config';
export interface SendInvitationOptions {
    to: string;
    firstName: string;
    lastName: string;
    temporaryPassword: string;
    loginUrl: string;
    roleName: string;
}
export declare class MailService {
    private readonly config;
    private transporter;
    private fromAddress;
    constructor(config: ConfigService);
    private initTransporter;
    isConfigured(): boolean;
    sendInvitationEmail(options: SendInvitationOptions): Promise<void>;
}
