/* eslint-disable prefer-promise-reject-errors */
import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('hould reject with an error', async () => {
  expect.assertions(1);
  read.mockReturnValue(Promise.reject('Error problem!'));
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).toEqual('Error problem!');
  }
});
