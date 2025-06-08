import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateAccountService } from 'src/services/create-account.service';
import {
  CreateAccountSchema,
  createAccountSchema,
} from '../schemas/accountSchemas';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('/accounts')
export class CreateAccountController {
  constructor(private createAccountService: CreateAccountService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountSchema))
  async handle(@Body() body: CreateAccountSchema) {
    try {
      await this.createAccountService.create(body);
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already exists') {
        throw new ConflictException(error.message);
      }
      throw error;
    }
  }
}