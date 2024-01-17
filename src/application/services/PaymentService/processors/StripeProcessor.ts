import { IPaymentProcessor } from '../IPaymentProcessor';

export class StripeProcessor implements IPaymentProcessor {
  processPayment(data: unknown): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
