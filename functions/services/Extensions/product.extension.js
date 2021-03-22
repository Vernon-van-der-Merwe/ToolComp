const $ = require("cheerio");
const Logger = require("firebase-functions").logger;

function parseEvetechProducts(response) {
  let ProductList = [];
  const prices = $(".price", response)
    .text()
    .replace(/^\s+|\s+$/gm, "")
    .split("\n");

  const names = $(".myProductName", response)
    .text()
    .replace(/^\s+|\s+$/gm, "")
    .split("\n");

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (!price.startsWith("R")) {
      prices.splice(i, 1);
    }
  }

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = prices[i];

    const GPU = { name: name, price: price };
    ProductList.push(GPU);
  }
  return ProductList;
}

function parseTakealotProduct(response) {
  let parsedResponse = JSON.parse(response);
  Logger.log(parsedResponse);
  let Product = {
    pagelink: parsedResponse.desktop_href,
    title: parsedResponse.core.title,
    rating: parsedResponse.core.star_rating,
    price:
      parsedResponse.enhanced_ecommerce_detail.ecommerce.detail.products[0]
        .price,
    inStock: parsedResponse.stock_availability.status,
    description: parsedResponse.description,
    imageUrls: parsedResponse.gallery.images,
  };
  return Product;
}

module.exports = {
  parseEvetechPrices,
  parseTakealotProduct,
};
