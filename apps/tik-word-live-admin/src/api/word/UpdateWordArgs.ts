import { WordWhereUniqueInput } from "./WordWhereUniqueInput";
import { WordUpdateInput } from "./WordUpdateInput";

export type UpdateWordArgs = {
  where: WordWhereUniqueInput;
  data: WordUpdateInput;
};
