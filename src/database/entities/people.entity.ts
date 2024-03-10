import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  date_birth: string;

  @Column()
  mother_name: string;

  @Column()
  street: string;

  @Column()
  house_number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  cep: string;
}
