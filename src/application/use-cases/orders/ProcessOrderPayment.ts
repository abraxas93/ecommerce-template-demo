import { IPaymentService } from '@/application/services/PaymentService';
import { IShippingService } from '@/application/services/ShippingService';
import { IOrderRepository } from '@/domain/repositories/IOrderRepository';

// using pattern comand
export class ProcessOrderPayment {
  constructor(
    private readonly orderRepo: IOrderRepository,
    private readonly paymentService: IPaymentService,
    private readonly shippingService: IShippingService
  ) {}

  async execute({ orderId }: { orderId: number }) {
    // TODO:
    // should find order by order id
    // should create payment invoice based on order data
    // should process payment and store its result
    // should process shipping process
    // returns {data: "", error: ""} unified interface
    return Promise.resolve({ data: orderId, error: null });
  }
}
