import { IPaymentProcessor } from '../IPaymentProcessor';

export class BraintreeProcessor implements IPaymentProcessor {
  processPayment(data: unknown): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
