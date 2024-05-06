import { pow } from './pow';

describe('pow', () => {
  it('raise a number to pow 4', () => {
    expect(pow(2, 4)).toBe(16);
  });

  describe('raise a number to n-pow', () => {
    function makePow(x: number) {
      let expected = x * x * x;
      it(`{x}raise a number to pow 3 is equal ${expected}`, () => {
        expect(pow(x, 3)).toBe(expected);
      });
    }

    for (let x = 1; x < 5; x++) {
      makePow(x);
    }
  });

  it('for non-valid n, the result is NaN', () => {
    expect(pow(2, -1)).toBeNaN();
  });

  it('for non-integer n, the result is NaN', () => {
    expect(pow(2, 1.5)).toBeNaN();
  });
});
