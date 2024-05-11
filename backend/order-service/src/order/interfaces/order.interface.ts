import { Document, Schema } from 'mongoose';

export interface Order extends Document {
  userId: Schema.Types.ObjectId;
  products: Array<{
    productId: Schema.Types.ObjectId;
    quantity: number;
  }>;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}
