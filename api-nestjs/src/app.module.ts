import { Module } from '@nestjs/common'
import { UserModule } from './app/user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
