import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentSession, ServiceRequest } from '@the-crew/common';

import { JwtAuthGuard } from '../../auth/guards';
import { PaymentService } from '../services';

@UseGuards(JwtAuthGuard)
@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(public readonly service: PaymentService) {}

  @Get('retrieve-payment-session')
  public async RetrieveSessionBySessionId(@Body() sessionDetails: PaymentSession) {
    console.log(sessionDetails.sessionId);
    return this.service.RetrieveSessionBySessionId(sessionDetails.sessionId);
  }

  @Post('create-checkout-session')
  public async CreateCheckoutSession(@Body() services: ServiceRequest[]) {
    return this.service.CreateCheckOutSession(services);
  }
}
