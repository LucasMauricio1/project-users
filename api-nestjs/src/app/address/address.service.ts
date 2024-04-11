import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressEntity } from './entities/address.entity'
import { Repository } from 'typeorm'
import { CreateAddressDto } from './dtos/create-address.dto'

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    userId: string,
  ): Promise<AddressEntity> {
    return await this.addressRepository.save({
      ...createAddressDto,
      userId,
    })
  }
}
