import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'
import { ReturnCreatedUserDto } from './dtos/return-created-user.dto'
import { ReturnUserDto } from './dtos/return-user.dto'

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<ReturnCreatedUserDto> {
    const userEntity = await this.userService.createUser(createUser)
    return new ReturnCreatedUserDto(userEntity)
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    )
  }
}
