const request = require("request-promise");
const Logger = require("firebase-functions").logger;
const ext = require("./Extensions/product.extension");

function getEvetechProductinfo(body) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await request(body.url);
      let products = ext.parseEvetechPrices(response);
      resolve(products);
    } catch (error) {
      Logger.info(error, { structuredData: true });
      reject("error");
    }
  });
}

module.exports = { getEvetechProductinfo };
