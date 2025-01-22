import GameSavingLoader from "../GameSavingLoader";

const gameSaving = { data: undefined, error: undefined };

GameSavingLoader.load().then(
  (saving) => {
    gameSaving.data = saving;
  },
  (error) => {
    gameSaving.error = error;
  }
);
