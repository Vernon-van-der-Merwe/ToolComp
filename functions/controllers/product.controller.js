const express = require("express");
const router = express.Router();
const productsService = require("../services/product.service");

router.get("/evetech", async (req, res) => {
  productsService
    .getEvetechProductinfo(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
