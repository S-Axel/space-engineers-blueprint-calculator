import roundToDec from './index';

describe('roundToDec', () => {
  it('should round to decimal places', () => {
    expect(roundToDec(1.234, 0)).toBe('1');
    expect(roundToDec(1.234, 1)).toBe('1.2');
    expect(roundToDec(1.234, 2)).toBe('1.23');
    expect(roundToDec(1.234, 3)).toBe('1.234');
    expect(roundToDec(1.234, 4)).toBe('1.234');

    expect(roundToDec(1, 0)).toBe('1');
    expect(roundToDec(1, 1)).toBe('1');
    expect(roundToDec(1, 2)).toBe('1');
  });
});
