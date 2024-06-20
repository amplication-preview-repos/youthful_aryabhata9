import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WordService } from "./word.service";
import { WordControllerBase } from "./base/word.controller.base";

@swagger.ApiTags("words")
@common.Controller("words")
export class WordController extends WordControllerBase {
  constructor(protected readonly service: WordService) {
    super(service);
  }
}
