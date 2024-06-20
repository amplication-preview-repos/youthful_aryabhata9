import { SortOrder } from "../../util/SortOrder";

export type GameSessionOrderByInput = {
  createdAt?: SortOrder;
  currentWord?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  wrongGuesses?: SortOrder;
};
