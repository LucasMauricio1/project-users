import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateAddressTable1618597945728 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS public.address (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                user_id UUID NOT NULL,
                complement VARCHAR NOT NULL,
                cep VARCHAR NOT NULL,
                address VARCHAR NOT NULL,
                number INT NOT NULL,
                state VARCHAR NOT NULL,
                city VARCHAR NOT NULL,
                neighborhood VARCHAR NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
                FOREIGN KEY (user_id) REFERENCES public.user(id)
            );
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS public.address;`)
  }
}
