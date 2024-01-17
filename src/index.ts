/* eslint-disable no-process-exit */
import 'reflect-metadata';
import { initLogger } from '@/utils/logger';
import { bootstrapDependencies } from './di-container';
import { bootstrapRoutes } from './infrastructure/http/routes';
import { container } from 'tsyringe';
import { bootstrapServer } from './infrastructure/http';

const logger = initLogger(__filename);

function bootstrapProcessEvents() {
  process.on('SIGINT', () => {
    // graceful shutdown should be here
    process.exit(1);
  });
  process.on('uncaughtException', (err) => {
    // TODO: to implement this
    console.error(err);
    process.exit(1);
  });

  process.on('unhandledRejection', (err) => {
    // TODO: to implement
    console.error(err);
    process.exit();
  });
}

async function main() {
  // entry point
  bootstrapProcessEvents();
  await bootstrapDependencies();
  const apiV1 = bootstrapRoutes({
    orderCtrl: container.resolve('OrderController'),
  });
  bootstrapServer(apiV1);
}

main().catch((err) => console.error(err));
