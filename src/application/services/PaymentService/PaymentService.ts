import { Processor } from '@/types';
import { IProcessorCreator } from './ProcessorCreator';
import { IPaymentProcessor } from './IPaymentProcessor';

export type Payment = {
  processor: Processor;
  amount: number;
};

export interface IPaymentService {
  handlePayment(payment: Payment): Promise<unknown>;
}

// implemented Strategy pattern, where our payment processor instance responsible for payment process(strategy)
// using IProcessorCreator (factory method) for creating payment processor instances
// also add some instance caching to reuse payment processors
// add private methods for better cohesion
// ALSO PaymentService depends on interfaces (Dependency Inversion from SOLID principles)
export class PaymentService implements IPaymentService {
  private processors: Record<string, IPaymentProcessor> = {};

  constructor(private readonly processorCreator: IProcessorCreator) {}

  private getProcessor(processor: Processor) {
    return this.processors[processor];
  }

  private isProcessorExist(processor: Processor) {
    return !!this.processors[processor];
  }

  handlePayment = async (payment: Payment) => {
    let paymentProcessor: IPaymentProcessor;
    if (this.isProcessorExist(payment.processor)) {
      paymentProcessor = this.getProcessor(payment.processor);
    } else {
      paymentProcessor = this.processorCreator.createPaymentProcessor(
        payment.processor
      );
    }
    // INFO: here shpuld be additional logic, like logging, emiting events, etc...
    return paymentProcessor.processPayment(payment.amount);
  };
}
