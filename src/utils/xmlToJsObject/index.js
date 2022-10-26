import X2JS from 'x2js';

/**
 * Convert an XML string to a JavaScript object
 * @param xmlString
 * @return {Object}
 */
const xmlToJsObject = (xmlString) => {
  const x2js = new X2JS();
  return x2js.xml2js(xmlString);
};

export default xmlToJsObject;
