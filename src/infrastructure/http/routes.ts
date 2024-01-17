/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { OrderController } from '../adapters/controllers';

export type Controllers = {
  orderCtrl: OrderController;
};

export function bootstrapRoutes({ orderCtrl }: Controllers) {
  const router = Router();

  router.put('/orders/:orderId', orderCtrl.handleProcessOrdPayment);

  // other routes should be here

  return router;
}
