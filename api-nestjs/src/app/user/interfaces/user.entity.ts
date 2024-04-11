import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

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

  @Column({ name: 'type_user', nullable: false })
  typeUser: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
