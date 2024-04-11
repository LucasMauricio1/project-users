import { Body, Controller, Param, Post } from '@nestjs/common'
import { CreateAddressDto } from './dtos/create-address.dto'
import { AddressService } from './address.service'
import { AddressEntity } from './entities/address.entity'

@Controller('api/v1/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  async createAddress(
    @Body() createAddresDto: CreateAddressDto,
    @Param('userId') userId: string,
  ): Promise<AddressEntity> {
    return await this.addressService.createAddress(createAddresDto, userId)
  }
}
