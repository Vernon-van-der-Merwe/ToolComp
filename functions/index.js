const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.use("/product", require("./controllers/product.controller"));

exports.toolcomp = functions.https.onRequest(app);
