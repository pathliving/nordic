import { sum } from './sum';

describe('sum module', () => {
  test('adds 1 + 2 is equel 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
