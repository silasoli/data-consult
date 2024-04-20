import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('serasa_emails')
export class SerasaEmails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Column()
  name: string;

  @Column()
  date_birth: string;

  @Column()
  email: string;

  @Column()
  score: string;

  @Column({ type: Boolean })
  personal_email: boolean
}
