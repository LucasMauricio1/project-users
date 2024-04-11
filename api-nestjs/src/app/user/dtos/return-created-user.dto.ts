import { UserEntity } from '../entities/user.entity'

export class ReturnCreatedUserDto {
  id: string
  age: number
  daysUntilBirthday: number
  birthdayMessage: string

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id
    this.age = this.calculateAge(userEntity.dateBirth)
    this.daysUntilBirthday = this.calculateDaysUntilBirthday(
      userEntity.dateBirth,
    )
    this.birthdayMessage = this.getBirthdayMessage(userEntity.dateBirth)
  }

  private calculateAge(dateOfBirth: string): number {
    const today = new Date()
    const birthDate = new Date(
      parseInt(dateOfBirth.slice(4, 8)),
      parseInt(dateOfBirth.slice(2, 4)) - 1,
      parseInt(dateOfBirth.slice(0, 2)),
    )
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--
    }
    return age
  }

  private calculateDaysUntilBirthday(dateOfBirth: string): number {
    const today = new Date()
    const birthDate = new Date(
      today.getFullYear(),
      parseInt(dateOfBirth.slice(2, 4)) - 1,
      parseInt(dateOfBirth.slice(0, 2)),
    )
    if (birthDate < today) {
      birthDate.setFullYear(today.getFullYear() + 1)
    }
    const oneDay = 24 * 60 * 60 * 1000
    return Math.round(
      Math.abs((today.getTime() - birthDate.getTime()) / oneDay),
    )
  }

  private getBirthdayMessage(dateOfBirth: string): string {
    const today = new Date()
    const birthDate = new Date(
      today.getFullYear(),
      parseInt(dateOfBirth.slice(2, 4)) - 1,
      parseInt(dateOfBirth.slice(0, 2)),
    )
    if (
      birthDate.getDate() === today.getDate() &&
      birthDate.getMonth() === today.getMonth()
    ) {
      return 'Parabéns! Hoje é o seu aniversário!'
    }
    return ''
  }
}
