import { WordWhereInput } from "./WordWhereInput";
import { WordOrderByInput } from "./WordOrderByInput";

export type WordFindManyArgs = {
  where?: WordWhereInput;
  orderBy?: Array<WordOrderByInput>;
  skip?: number;
  take?: number;
};
