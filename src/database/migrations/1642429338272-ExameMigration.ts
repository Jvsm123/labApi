import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ExameMigration1642429338272 implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void>
	{
		await queryRunner.createTable( new Table(
		{
			name: "exame",
			columns:
			[
				{
					name: "id",
					type: "number",
					isPrimary: true
				},
				{
					name: "nome",
					type: "varchar"
				},
				{
					name: "tipo",
					type: "varchar",
				},
				{
					name: "status",
					type: "varchar",
					default: "Ativo"
				},
				{
					name: "created_at",
					type: "timestamp",
					default: "now()"
				}
			],
			foreignKeys:
			[
				{
					name: "FKLaboratorio",
					referencedTableName: "laboratorio",
					referencedColumnNames: ['nome'],
					columnNames: [],
					onDelete: "SET NULL"
				}
			]
		}) );
	};

	public async down(queryRunner: QueryRunner): Promise<void>
	{
		await queryRunner.dropTable("exame");
	};
};
