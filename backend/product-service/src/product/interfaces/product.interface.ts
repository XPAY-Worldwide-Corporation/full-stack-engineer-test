import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly inStock: boolean;
  readonly categories: string[];
}
