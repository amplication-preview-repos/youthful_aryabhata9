import { GameSession as TGameSession } from "../api/gameSession/GameSession";

export const GAMESESSION_TITLE_FIELD = "currentWord";

export const GameSessionTitle = (record: TGameSession): string => {
  return record.currentWord?.toString() || String(record.id);
};
