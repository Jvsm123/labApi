import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';

import { Exame } from '../../database/entity/exame';

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

	@ManyToMany( () => Exame, exame => exame.laboratorio )
	@JoinTable()
	exames: Exame[];
};
