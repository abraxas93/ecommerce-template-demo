import { container } from 'tsyringe';
import { EventEmitter } from 'events';
import { createMongoClient } from '@/infrastructure/database/mongo/createMongoClient';
import { MongoClient } from 'mongodb';
import { OrderRepository } from './infrastructure/database/mongo';
import { IOrderRepository } from './domain/repositories/IOrderRepository';
import {
  IOrderService,
  OrderService,
} from './application/services/OrderService';
import { OrderController } from './infrastructure/adapters/controllers';
import { ProcessOrderPayment } from './application/use-cases/orders';

export async function bootstrapDependencies() {
  const mongoClient = await createMongoClient();
  const eventEmitter = new EventEmitter();

  container.register<EventEmitter>('EventEmitter', { useValue: eventEmitter });
  container.register<MongoClient>('MongoClient', { useValue: mongoClient });

  const orderRepository = new OrderRepository();
  container.register<IOrderRepository>('IOrderRepository>', {
    useValue: orderRepository,
  });
  container.register<ProcessOrderPayment>(
    'ProcessOrderPayment',
    ProcessOrderPayment
  );
  container.register<IOrderService>('IOrderService', OrderService);
  container.register<OrderController>('OrderController', OrderController);
}
