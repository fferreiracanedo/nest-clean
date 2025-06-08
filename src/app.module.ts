import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateAccountService } from './services/create-account.service'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'

@Module({
  imports: [ConfigModule.forRoot({
    validate : env => envSchema.parse(env),
    isGlobal: true,
  })
],
  controllers: [CreateAccountController],
  providers: [PrismaService, CreateAccountService],
})
export class AppModule {}
