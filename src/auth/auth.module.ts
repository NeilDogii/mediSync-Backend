import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EncryptUtil } from '../common/utils/encrypt.util';
import { JwtUtil } from '../common/utils/jwt.util';
@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtUtil, EncryptUtil],
})
export class AuthModule {}
