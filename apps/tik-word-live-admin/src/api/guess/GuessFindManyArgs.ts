import { GuessWhereInput } from "./GuessWhereInput";
import { GuessOrderByInput } from "./GuessOrderByInput";

export type GuessFindManyArgs = {
  where?: GuessWhereInput;
  orderBy?: Array<GuessOrderByInput>;
  skip?: number;
  take?: number;
};
