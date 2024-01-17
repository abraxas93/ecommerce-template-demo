/* eslint-disable no-process-exit */
import 'reflect-metadata';
import { initLogger } from '@/utils/logger';
import { bootstrapDependencies } from './di-container';

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
  logger.info('bootstrap app dependencies');
  bootstrapProcessEvents();
  await bootstrapDependencies();
}

main().catch((err) => console.log(err));
