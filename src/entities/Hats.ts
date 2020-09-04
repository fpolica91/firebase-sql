import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm'
import { Hippo } from './Hippo'

@Entity()
export class Hat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  color: string;
  // modeling one table to antoher, in this case the owner of the hat is the hippo
  @ManyToOne(type => Hippo, hippo => hippo.hats)
  owner: Hippo
}