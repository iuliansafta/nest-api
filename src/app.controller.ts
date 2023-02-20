import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAddressDTO } from './create-address.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/wallets')
  getAllAddress(): any {
    return this.appService.getAddress();
  }

  @Post('/wallets')
  insertAddress(@Body() body: CreateAddressDTO) {
    this.appService.addAddress(body);
  }
}
