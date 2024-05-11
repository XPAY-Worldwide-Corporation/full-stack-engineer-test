export class CreatePaymentDto {
  amount: number; // amount in cents
  currency: string;
  source: string; // token retrieved from Stripe.js on the client-side
  description?: string;
}
