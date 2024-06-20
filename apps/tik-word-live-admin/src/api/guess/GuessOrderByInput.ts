import { SortOrder } from "../../util/SortOrder";

export type GuessOrderByInput = {
  createdAt?: SortOrder;
  guess?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  updatedAt?: SortOrder;
};
