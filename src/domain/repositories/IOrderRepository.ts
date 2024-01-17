import { Order } from '../entities';

export interface IOrderRepository {
  findById(orderId: number | string): Promise<Order>;
}
