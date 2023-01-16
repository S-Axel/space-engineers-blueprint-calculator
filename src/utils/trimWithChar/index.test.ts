import trimWithChar from './index';

describe('trimWithChar', () => {
  it('should trim with char', () => {
    expect(trimWithChar('...abc...', '.')).toBe('abc');
  });

  it('given no char, should return same string', () => {
    expect(trimWithChar('abc', '')).toBe('abc');
  });

  it('given char not found, should return same string', () => {
    expect(trimWithChar('abc', 'd')).toBe('abc');
  });

  it('given string composed of given char only, should return empty string', () => {
    expect(trimWithChar('...', '.')).toBe('');
  });
});
