import loadDataReducer, { LOAD_DATA } from '../redux/loadApi';

describe('test the reducer function', () => {
  test('reducer returns new state', () => {
    const newState = ['a', 'b', 'c'];
    const result = loadDataReducer(undefined, { type: LOAD_DATA, payload: newState });
    expect(result).toEqual(newState);
  });

  test('reducer to return empty array if action is undefined', () => {
    const newState = [];
    const result = loadDataReducer(undefined, { type: undefined, payload: undefined });
    expect(result).toEqual(newState);
  });
});
