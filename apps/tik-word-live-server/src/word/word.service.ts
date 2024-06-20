import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WordServiceBase } from "./base/word.service.base";

@Injectable()
export class WordService extends WordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
