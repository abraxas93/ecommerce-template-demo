import { ShippingDetails } from '../value-objects/ShippingDetails';
import { Product } from './Product';

export class Order {
  public orderId: number;

  private _customerId: number | string;

  private _products: Product[];

  public details: ShippingDetails;

  get customerId() {
    return this._customerId;
  }

  constructor(_orderId: number, customerId: number, products: Product[]) {
    this.orderId = _orderId;
    this._customerId = customerId;
    this._products = products;
  }

  calcTotalAmount() {
    return this._products.reduce((sum, current) => {
      const total = current.quantity * current.price;
      return sum + total;
    }, 0);
  }
}
