import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      ok: true,
      message: '3PL WMS API',
      docs: 'Use /auth/staff/login to sign in, then call protected endpoints with Bearer token.',
    };
  }
}
