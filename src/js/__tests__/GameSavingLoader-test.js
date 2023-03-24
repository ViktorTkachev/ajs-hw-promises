/* eslint-disable prefer-promise-reject-errors */
import GameSavingLoader from '../GameSavingLoader';

test('should load and parse game saving data', (done) => {
  const expectedData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(expectedData);
    done();
  });
});

// jest.setTimeout(10000);

// test('should reject with an error', async () => {
//   // Изменили функцию read()
//   GameSavingLoader.read = () => Promise.reject('Error problem!');

//   try {
//     await GameSavingLoader.load();
//   } catch (error) {
//     expect(error).toEqual('Error problem!');
//   }
// });
