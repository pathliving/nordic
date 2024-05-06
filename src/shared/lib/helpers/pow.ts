export function pow(x: number, n: number): number {
  if (n < 0) return NaN;
  if (Math.floor(n) !== n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
