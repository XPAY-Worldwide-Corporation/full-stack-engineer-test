import { Document, Schema } from 'mongoose';

export interface Cart extends Document {
  userId: Schema.Types.ObjectId;
  items: Array<{
    productId: Schema.Types.ObjectId;
    quantity: number;
  }>;
  updatedAt: Date;
}
