import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WordWhereInput = {
  id?: StringFilter;
  word?: StringNullableFilter;
};
