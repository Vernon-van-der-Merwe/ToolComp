const $ = require("cheerio");

function parseEvetechPrices(response) {
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

module.exports = { parseEvetechPrices };
