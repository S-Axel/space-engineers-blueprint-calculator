import xmlToJsObject from './index';

describe('xmlToJsObject', () => {
  it('is a function', () => {
    expect(typeof xmlToJsObject).toBe('function');
  });
  it('when given xml, returns an Object', async () => {
    expect(xmlToJsObject('<a></a>')).toBeInstanceOf(Object);
  });
});
