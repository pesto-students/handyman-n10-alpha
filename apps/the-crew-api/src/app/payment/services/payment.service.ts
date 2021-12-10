import { Injectable } from '@nestjs/common';
import { ServiceRequest } from '@the-crew/common';
import Stripe from 'stripe';

import { ServiceRequestService } from '../../service-request/services';

@Injectable()
export class PaymentService {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}
  stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
    apiVersion: '2020-08-27',
  });
  public async RetrieveSessionBySessionId(id: string) {
    return await this.stripe.checkout.sessions.retrieve(id);
  }

  public async CreateCheckOutSession(services: ServiceRequest[]) {
    const availableServices = await this.serviceRequestService.find();
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: services.map(item => {
        const serv = availableServices.find(x => x.id === item.id);
        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: serv.title,
            },
            unit_amount: serv.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.NX_CORS_ORIGINS}/bookings`,
      cancel_url: `${process.env.NX_CORS_ORIGINS}`,
    });
    return session;
  }
}
