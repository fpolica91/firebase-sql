import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  OneToMany
} from 'typeorm'

import { Hat } from './Hats'
//A TypeORM entity is a class that maps TypeScript code to a database table.

@Entity()
export class Hippo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  weight: number

  @OneToMany(type => Hat, hat => hat.owner)
  hats: Hat[];

  @CreateDateColumn()
  created_at: Date


}
