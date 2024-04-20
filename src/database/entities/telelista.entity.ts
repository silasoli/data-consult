import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('telelista')
export class Telelista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Column()
  name: string;

  @Column()
  place_type: string;

  @Column()
  street: string;

  @Column()
  house_number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  cep: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  phone: string;
}
