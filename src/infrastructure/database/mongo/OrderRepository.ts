import { Order } from '@/domain/entities';
import { IOrderRepository } from '@/domain/repositories/IOrderRepository';

export class OrderRepository implements IOrderRepository {
  async findById() {
    return Promise.resolve(new Order(123, 123, []));
  }
}
