import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GameSessionWhereInput = {
  currentWord?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  wrongGuesses?: IntNullableFilter;
};
