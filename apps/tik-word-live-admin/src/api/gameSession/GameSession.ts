export type GameSession = {
  createdAt: Date;
  currentWord: string | null;
  endTime: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  wrongGuesses: number | null;
};
