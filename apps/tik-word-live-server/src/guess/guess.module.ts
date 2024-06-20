import { Module } from "@nestjs/common";
import { GuessModuleBase } from "./base/guess.module.base";
import { GuessService } from "./guess.service";
import { GuessController } from "./guess.controller";
import { GuessResolver } from "./guess.resolver";

@Module({
  imports: [GuessModuleBase],
  controllers: [GuessController],
  providers: [GuessService, GuessResolver],
  exports: [GuessService],
})
export class GuessModule {}
