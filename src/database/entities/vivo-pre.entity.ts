import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vivo_pre')
export class VivoPre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  person_type: string;

  @Column()
  status: string;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  street: string;

  @Column()
  house_number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  state: string;

  @Column()
  cep: string;
}
