import { Word as TWord } from "../api/word/Word";

export const WORD_TITLE_FIELD = "word";

export const WordTitle = (record: TWord): string => {
  return record.word?.toString() || String(record.id);
};
