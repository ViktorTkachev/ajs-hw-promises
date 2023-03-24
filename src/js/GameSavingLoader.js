import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((parsedData) => {
          const gameSavingData = JSON.parse(parsedData);
          const gameSaving = new GameSaving(
            gameSavingData.id,
            gameSavingData.created,
            gameSavingData.userInfo,
          );
          resolve(gameSaving);
        })
        .catch((error) => reject(error));
    });
  }
}

export default GameSavingLoader;
