import { ProductCategory } from '../value-objects';

// its not the best idea to make fields public, but its for demo purposes
export class Product {
  public title: string;

  public categor: ProductCategory;

  public quantity: number;

  public price: number;
}
