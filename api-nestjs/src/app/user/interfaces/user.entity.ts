import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  cpf: string

  @Column({ nullable: false })
  sex: string

  @Column({ name: 'date_birth', nullable: false })
  dateBirth: string

  @Column({ name: 'marital_state', nullable: false })
  maritalState: string

  @Column({ nullable: false })
  password: string
}
