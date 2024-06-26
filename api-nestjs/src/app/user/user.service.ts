import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserEntity } from './entities/user.entity'
import { hash } from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10
    const passwordHash = await hash(createUserDto.password, saltOrRounds)

    return await this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHash,
    })
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }
}
