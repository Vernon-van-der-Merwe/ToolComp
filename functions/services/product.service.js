const request = require("request-promise");
const Logger = require("firebase-functions").logger;
const ext = require("./Extensions/product.extension");

function getEvetechProductinfo(body) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await request(body.url);
      let products = ext.parseEvetechProducts(response);
      resolve(products);
    } catch (error) {
      Logger.info(error, { structuredData: true });
      reject(error);
    }
  });
}

function getTakealotProductinfo(body) {
  return new Promise(async (resolve, reject) => {
    try {
      let arr = body.url.split("/");
      let id = arr[arr.length - 1];
      let options = {
        url: `https://api.takealot.com/rest/v-1-10-0/product-details/${id}?platform=desktop`,
        headers: { "User-Agent": "PostmanRuntime/7.26.10" },
      };
      let response = await request(options);
      let product = ext.parseTakealotProduct(response);
      resolve(product);
    } catch (error) {
      Logger.info(error, { structuredData: true });
      reject("error");
    }
  });
}

module.exports = { getEvetechProductinfo, getTakealotProductinfo };
