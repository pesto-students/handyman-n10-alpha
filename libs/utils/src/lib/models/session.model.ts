import { IsString } from 'class-validator';

export class PaymentSession {
  @IsString()
  sessionId: string;
}
