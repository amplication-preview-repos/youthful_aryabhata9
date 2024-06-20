import { WordWhereInput } from "./WordWhereInput";

export type WordListRelationFilter = {
  every?: WordWhereInput;
  some?: WordWhereInput;
  none?: WordWhereInput;
};
