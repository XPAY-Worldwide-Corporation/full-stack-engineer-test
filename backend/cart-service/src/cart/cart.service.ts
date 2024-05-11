import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './interfaces/cart.interface';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async updateCart(
    userId: string,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    const { productId, quantity } = updateCartDto;
    return this.cartModel
      .findOneAndUpdate(
        { userId },
        {
          $set: {
            items: { productId, quantity },
            updatedAt: new Date(),
          },
        },
        { new: true, upsert: true },
      )
      .exec();
  }

  async findCartByUserId(userId: string): Promise<Cart> {
    return this.cartModel.findOne({ userId }).exec();
  }
}
