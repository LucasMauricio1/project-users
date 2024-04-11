import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateAddressDto {
  @IsString()
  cep: string

  @IsString()
  address: string

  @IsInt()
  @IsOptional()
  number: number

  @IsString()
  @IsOptional()
  complement: string

  @IsString()
  neighborhood: string

  @IsString()
  state: string

  @IsString()
  city: string
}
