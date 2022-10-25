import xmlToJsObject from './index';

describe('xmlToJsObject', () => {
  it('is a function', () => {
    expect(typeof xmlToJsObject).toBe('function');
  });
  it('returns a Promise', () => {
    expect(xmlToJsObject('')).toBeInstanceOf(Promise);
  });
  it('when given xml, resolves to an Object', async () => {
    const result = await xmlToJsObject('<a></a>');
    expect(result).toBeInstanceOf(Object);
  });
  it('when given wrong xml, resolves to an error', async () => {
    await expect(xmlToJsObject('<a></b>')).rejects.toBeInstanceOf(Error);
  });
});
