import * as graphql from "@nestjs/graphql";
import { WordResolverBase } from "./base/word.resolver.base";
import { Word } from "./base/Word";
import { WordService } from "./word.service";

@graphql.Resolver(() => Word)
export class WordResolver extends WordResolverBase {
  constructor(protected readonly service: WordService) {
    super(service);
  }
}
