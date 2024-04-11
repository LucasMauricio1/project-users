import { IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsString()
  sex: string

  @IsString()
  cpf: string

  @IsString()
  dateBirth: string

  @IsString()
  maritalState: string

  @IsString()
  password: string
}
