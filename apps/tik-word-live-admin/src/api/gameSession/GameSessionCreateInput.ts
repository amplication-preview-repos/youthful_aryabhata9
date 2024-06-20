export type GameSessionCreateInput = {
  currentWord?: string | null;
  endTime?: Date | null;
  status?: "Option1" | null;
  wrongGuesses?: number | null;
};
