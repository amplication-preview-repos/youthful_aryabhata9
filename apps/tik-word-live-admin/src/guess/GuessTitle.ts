import { Guess as TGuess } from "../api/guess/Guess";

export const GUESS_TITLE_FIELD = "guess";

export const GuessTitle = (record: TGuess): string => {
  return record.guess?.toString() || String(record.id);
};
