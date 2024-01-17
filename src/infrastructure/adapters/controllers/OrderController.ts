import { Request, Response } from 'express';
import { IOrderService } from '@/application/services/OrderService';

export class OrderController {
  constructor(private readonly orderService: IOrderService) {}

  handleProcessOrdPayment = async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const { error, data } = await this.orderService.processOrderPayment(
      orderId
    );
    if (error) {
      res.status(400).json({ error });
    }
    res.status(200).json({ data });
  };
}
