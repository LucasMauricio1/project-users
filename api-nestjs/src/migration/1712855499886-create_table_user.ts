import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUsersTable1618597945727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS public.user (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR NOT NULL,
                cpf VARCHAR NOT NULL,
                sex VARCHAR NOT NULL,
                date_birth VARCHAR NOT NULL,
                marital_state VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                type_user INT NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL
            );

            CREATE SEQUENCE IF NOT EXISTS public.user_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE IF EXISTS public.user_id_seq OWNED BY public.user.id;

            ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT uuid_generate_v4();
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS public.user;`)
    await queryRunner.query(`DROP SEQUENCE IF EXISTS public.user_id_seq;`)
  }
}
