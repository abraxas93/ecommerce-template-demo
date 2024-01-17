import { container } from 'tsyringe';
import { EventEmitter } from 'events';
import { createMongoClient } from '@/infrastructure/database/mongo/createMongoClient';
import { MongoClient } from 'mongodb';

export async function bootstrapDependencies() {
  const mongoClient = await createMongoClient();
  const eventEmitter = new EventEmitter();

  container.register<EventEmitter>('EventEmitter', { useValue: eventEmitter });
  container.register<MongoClient>('MongoClient', { useValue: mongoClient });
}
