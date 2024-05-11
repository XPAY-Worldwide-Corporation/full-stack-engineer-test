import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async createCharge(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.createCharge(createPaymentDto);
  }
}
