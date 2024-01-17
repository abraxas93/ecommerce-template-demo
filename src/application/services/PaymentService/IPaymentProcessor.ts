export interface IPaymentProcessor {
  processPayment(data: unknown): Promise<unknown>;
}
