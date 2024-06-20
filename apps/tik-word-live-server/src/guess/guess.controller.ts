import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GuessService } from "./guess.service";
import { GuessControllerBase } from "./base/guess.controller.base";

@swagger.ApiTags("guesses")
@common.Controller("guesses")
export class GuessController extends GuessControllerBase {
  constructor(protected readonly service: GuessService) {
    super(service);
  }
}
