import { Processor } from '@/types';
import { IPaymentProcessor } from './IPaymentProcessor';
import { StripeProcessor } from './processors/StripeProcessor';
import { PayPalProcessor } from './processors/PayPalProcessor';
import { BraintreeProcessor } from './processors/BraintreeProcessor';

export interface IProcessorCreator {
  createPaymentProcessor(processor: Processor): IPaymentProcessor;
}
// factory method pattern
export class ProcessorCreator implements IProcessorCreator {
  createPaymentProcessor(processor: Processor): IPaymentProcessor {
    switch (processor) {
      case 'stripe':
        return new StripeProcessor();
      case 'paypal':
        return new PayPalProcessor();
      case 'braintree':
        return new BraintreeProcessor();
      default:
        throw new Error('Unknown processor type');
    }
  }
}
