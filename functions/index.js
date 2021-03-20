const functions = require("firebase-functions");
const request = require('request-promise')
const url = 'https://www.evetech.co.za/PC-Components/buy-amd-cpu-167.aspx'
const $ = require('cheerio')
const { html } = require('cheerio')
const express = require('express')
const app = express()
const port = 4300;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

app.get('/',(req,res)=>{
	request(url)
	.then((response) => {
		let ProductList = []
		const prices = $('.price', response)
			.text()
			.replace(/^\s+|\s+$/gm, '')
			.split('\n')

		const names = $('.myProductName', response)
			.text()
			.replace(/^\s+|\s+$/gm, '')
			.split('\n')

		for (let i = 0; i < prices.length; i++) {
			const price = prices[i]
			if (!price.startsWith('R')) {
				prices.splice(i, 1)
			}
		}

		for (let i = 0; i < names.length; i++) {
			const name = names[i]
			const price = prices[i]

			const GPU = { name: name, price: price }
			ProductList.push(GPU)
		}
		res.send(ProductList)
	})
	.catch(function (err) {
		console.log(err)
		//handle error
	})
})
