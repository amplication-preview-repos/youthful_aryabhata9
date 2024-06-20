import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuessServiceBase } from "./base/guess.service.base";

@Injectable()
export class GuessService extends GuessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
