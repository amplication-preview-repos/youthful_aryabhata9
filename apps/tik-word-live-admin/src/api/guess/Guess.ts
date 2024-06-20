export type Guess = {
  createdAt: Date;
  guess: string | null;
  id: string;
  isCorrect: boolean | null;
  updatedAt: Date;
};
