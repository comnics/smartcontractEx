var express = require('express');
var dapp = require('../public/javascripts/dapp');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var greeting = dapp.helloTest();
  res.render('index', {greeting: greeting});
});
