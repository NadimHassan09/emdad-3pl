import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule } from '../clients/clients.module';
import { UsersModule } from '../users/users.module';
import { ActorsModule } from '../actors/actors.module';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt-access' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const expiresIn = config.get<string | number>(
          'JWT_ACCESS_EXPIRES_IN',
          900,
        );
        return {
          secret: config.get<string>('JWT_SECRET', 'change-me-in-production'),
          signOptions: {
            expiresIn:
              typeof expiresIn === 'string'
                ? parseInt(expiresIn, 10)
                : expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
    ClientsModule,
    UsersModule,
    ActorsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy],
  exports: [AuthService],
})
export class AuthModule {}
