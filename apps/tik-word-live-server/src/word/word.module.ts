import { Module } from "@nestjs/common";
import { WordModuleBase } from "./base/word.module.base";
import { WordService } from "./word.service";
import { WordController } from "./word.controller";
import { WordResolver } from "./word.resolver";

@Module({
  imports: [WordModuleBase],
  controllers: [WordController],
  providers: [WordService, WordResolver],
  exports: [WordService],
})
export class WordModule {}
