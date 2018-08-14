exports.adoption = {
  abi:
    [
      {
        "constant": false,
        "inputs": [
          {
            "name": "petId",
            "type": "uint256"
          }
        ],
        "name": "adopt",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "adopters",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getAdopters",
        "outputs": [
          {
            "name": "",
            "type": "address[16]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  ,
  address:'0xadab19250a829520864f68f9f831db0f8923aca4'
}

exports.hello = {
  abi:[
    {
      "constant": false,
      "inputs": [
        {
          "name": "_v",
          "type": "string"
        }
      ],
      "name": "setString",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_v",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getString",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  address:'0xadab19250a829520864f68f9f831db0f8923aca4'
}
