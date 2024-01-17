export interface IOrderService {
  processOrderPayment(
    orderId: number | string
  ): Promise<{ data: null; error: null | Error }>;
}

export class OrderService implements IOrderService {
  processOrderPayment(
    orderId: number | string
  ): Promise<{ data: null; error: null | Error }> {
    return Promise.resolve({ data: null, error: null });
  }
}
