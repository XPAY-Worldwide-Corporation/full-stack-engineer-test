export class CreateOrderDto {
  readonly userId: string;
  readonly products: Array<{
    productId: string;
    quantity: number;
  }>;
}
