import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class LabMigration1642429318425 implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void>
	{
		await queryRunner.createTable( new Table(
		{
			name: "laboratorio",
			columns:
			[
				{
					name: "id",
					type: "int",
					isPrimary: true
				},
				{
					name: "nome",
					type: "varchar",
				},
				{
					name: "endereco",
					type: "varchar"
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
					name: "FKExames",
					referencedTableName: "exame",
					referencedColumnNames: ['nome'],
					columnNames: [],
					onDelete: "SET NULL"
				}
			]
		}));
	};

	public async down(queryRunner: QueryRunner): Promise<void>
	{
		await queryRunner.dropTable("laboratorio");
	};
};
