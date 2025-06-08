import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateAccountService } from './services/create-account.service'

@Module({
  controllers: [CreateAccountController],
  providers: [PrismaService, CreateAccountService],
})
export class AppModule {}
