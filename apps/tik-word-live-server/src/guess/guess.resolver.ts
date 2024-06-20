import * as graphql from "@nestjs/graphql";
import { GuessResolverBase } from "./base/guess.resolver.base";
import { Guess } from "./base/Guess";
import { GuessService } from "./guess.service";

@graphql.Resolver(() => Guess)
export class GuessResolver extends GuessResolverBase {
  constructor(protected readonly service: GuessService) {
    super(service);
  }
}
