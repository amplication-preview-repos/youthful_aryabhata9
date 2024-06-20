import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type GuessWhereInput = {
  guess?: StringNullableFilter;
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
};
