import { GuessWhereUniqueInput } from "./GuessWhereUniqueInput";
import { GuessUpdateInput } from "./GuessUpdateInput";

export type UpdateGuessArgs = {
  where: GuessWhereUniqueInput;
  data: GuessUpdateInput;
};
