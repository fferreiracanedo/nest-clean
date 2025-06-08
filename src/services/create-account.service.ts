import { PrismaService } from "src/prisma/prisma.service";
import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { CreateAccountSchema } from '../schemas/accountSchemas';

@Injectable()
export class CreateAccountService {

  constructor(private prisma: PrismaService) {}

  async create(data: CreateAccountSchema): Promise<string> {

    const { email } = data;

    const verifyIfEmailExists = await this.prisma.user.findUnique({
      where: { email }
    });

    if (verifyIfEmailExists) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await hash(data.password, 8);

    data.password = hashedPassword;

    await this.prisma.user.create({
      data
    });

    return 'user created successfully'; 
  }
}