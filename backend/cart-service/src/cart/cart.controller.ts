import { Controller, Get, Patch, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Patch(':userId')
  async updateCart(
    @Param('userId') userId: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartService.updateCart(userId, updateCartDto);
  }

  @Get(':userId')
  async findCartByUserId(@Param('userId') userId: string) {
    return this.cartService.findCartByUserId(userId);
  }
}
