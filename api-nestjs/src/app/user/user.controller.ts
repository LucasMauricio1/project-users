import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'
import { User } from './interfaces/user.interface'

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUser)
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser()
  }
}
