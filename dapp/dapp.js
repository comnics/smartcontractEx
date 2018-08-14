var contracts = require('./contracts.js');
var Web3 = require('web3');

//web3 init
// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }

let defaultAccount = web3.eth.accounts[0];

var adoptionContract = web3.eth.contract(contracts.adoption.abi).at(contracts.adoption.address);
var helloContract = web3.eth.contract(contracts.hello.abi).at(contracts.hello.address);

exports.getBalance = function(){
  return web3.eth.getBalance(defaultAccount);
}

exports.getAdopters = function(){
  return adoptionContract.getAdopters();
}

exports.helloTest = function(){
  return helloContract.getString();
}

//console.log(contracts);
