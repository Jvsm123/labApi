import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

import { Laboratorio } from './laboratorio';

@Entity("exame")
export class Exame
{
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column()
	nome: string;

	@Column()
	tipo: string;

	@Column()
	status: string;

	@CreateDateColumn()
	created_at: Date;

	@ManyToOne( () => Laboratorio, lab => lab.exames )
	laboratorio: Laboratorio;
};
