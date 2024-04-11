import { UserEntity } from '../entities/user.entity'

export class ReturnUserDto {
  id: string
  name: string
  sex: string
  cpf: string
  dateBirth: string
  maritalState: string

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id
    this.name = userEntity.name
    this.sex = userEntity.sex
    this.cpf = userEntity.cpf
    this.dateBirth = userEntity.dateBirth
    this.maritalState = userEntity.maritalState
  }
}
