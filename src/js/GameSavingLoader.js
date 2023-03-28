import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static load() {
    const promise = read()
      .then((data) => json(data))
      .then((parsedData) => {
        const gameSavingData = JSON.parse(parsedData);
        const gameSaving = new GameSaving(
          gameSavingData.id,
          gameSavingData.created,
          gameSavingData.userInfo,
        );
        return gameSaving;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return promise;
  }
}

export default GameSavingLoader;
