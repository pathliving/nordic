import { squeared } from './squared';

describe('squared module', () => {
  test('2 * 2 is equal 4', () => {
    expect(squeared(2)).toBe(4);
  });
});
