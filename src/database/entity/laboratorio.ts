import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

// import { Exame } from './exame';

@Entity("laboratorio")
export class Laboratorio
{
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column()
	nome: string;

	@Column()
	endereco: string;

	@Column()
	status: string;

	@CreateDateColumn()
	created_at: Date;

	// @OneToMany( () => Exame, exame => exame.laboratorio )
	// exames: Exame[];
};
