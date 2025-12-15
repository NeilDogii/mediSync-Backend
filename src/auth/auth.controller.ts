import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/patient/login')
  @HttpCode(HttpStatus.OK)
  async patientLogin(@Body() body: { email: string; password: string }) {
    return await this.authService.loginUser(body);
  }

  @Post('/patient/register')
  @HttpCode(HttpStatus.CREATED)
  async patientRegister(
    @Body()
    body: Prisma.PatientCreateInput,
  ) {
    return await this.authService.registerUser(body);
  }

  @Post('/doctor/login')
  @HttpCode(HttpStatus.OK)
  async doctorLogin(@Body() body: { username: string; password: string }) {
    return await this.authService.loginDoctor(body);
  }

  @Post('/admin/login')
  @HttpCode(HttpStatus.OK)
  async adminLogin(@Body() body: { username: string; password: string }) {
    return await this.authService.loginAdmin(body);
  }
}
