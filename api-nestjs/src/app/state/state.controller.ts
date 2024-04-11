import { Controller, Get } from '@nestjs/common'
import { StateService } from './state.service'
import { StateEntity } from './entities/state.entity'

@Controller('api/v1/state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAllState(): Promise<StateEntity[]> {
    return await this.stateService.getAllState()
  }
}
