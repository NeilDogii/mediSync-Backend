import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class EncryptUtil {
  async encryptPayload(payload: string): Promise<string> {
    try {
      return await argon2.hash(payload);
    } catch (error) {
      console.error('Payload encryption failed:', error);
      throw error;
    }
  }

  async verifyPayload(payload: string, hash: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, payload);
    } catch (error) {
      console.error('Payload verification failed:', error);
      return false;
    }
  }
}
