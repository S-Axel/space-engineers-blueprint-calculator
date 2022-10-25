import parser from 'xml2js';

/**
 * Convert an XML string to a JavaScript object
 * @param xmlString
 * @return {Promise<Object>}
 */
const xmlToJsObject = async (xmlString) => new Promise((resolve, reject) => {
  parser.parseString(xmlString, (error, jsObject) => {
    if (error) reject(error);
    else resolve(jsObject);
  });
});

export default xmlToJsObject;
