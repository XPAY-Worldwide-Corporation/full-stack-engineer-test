import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-04-10',
    });
  }

  async createCharge(
    createPaymentDto: CreatePaymentDto,
  ): Promise<Stripe.Response<Stripe.Charge>> {
    const { amount, currency, source, description } = createPaymentDto;
    return this.stripe.charges.create({
      amount,
      currency,
      source,
      description,
    });
  }
}
