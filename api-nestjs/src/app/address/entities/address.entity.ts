import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'user_id', nullable: false })
  userId: string

  @Column()
  complement: string

  @Column({ nullable: false })
  cep: string

  @Column({ nullable: false })
  address: string

  @Column()
  number: number

  @Column({ nullable: false })
  state: string

  @Column({ nullable: false })
  city: string

  @Column({ nullable: false })
  neighborhood: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
