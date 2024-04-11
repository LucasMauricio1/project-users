import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('api/v1/user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return { ...createUser, password: undefined }
  }
}
