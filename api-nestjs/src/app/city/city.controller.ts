import { Controller, Get, Param } from '@nestjs/common'
import { CityService } from './city.service'
import { CityEntity } from './entities/city.entity'

@Controller('api/v1/city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  async getAllState(@Param('stateId') stateId: number): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(stateId)
  }
}
