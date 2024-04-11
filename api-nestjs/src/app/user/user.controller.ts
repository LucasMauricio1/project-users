import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'
import { UserEntity } from './interfaces/user.entity'

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return await this.userService.createUser(createUser)
  }

  @Get()
  async getAllUser(): Promise<UserEntity[]> {
    return this.userService.getAllUser()
  }
}
