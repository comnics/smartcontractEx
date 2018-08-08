App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Adoption.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AdoptionArtifact = data;

      web3.eth.defaultAccount = web3.eth.accounts[0];

      var AdoptionContract = web3.eth.contract(AdoptionArtifact.abi);
      App.contracts.Adoption = AdoptionContract.at('0x1de9bbb23ca1719e8b48a849b54a3a8ac26dd7b2');

      // Adoption.getAdopters(function(error, result){
      //   if(!error)
      //       {
      //           console.log(result);
      //       }
      //   else
      //       console.error(error);
      // });

      return App.markAdopted();
      /*

      App.contracts.Adoption = TruffleContract(AdoptionArtifact);
    
      // Set the provider for our contract
      App.contracts.Adoption.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
      */
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    var adoptionInstance;

    App.contracts.Adoption.getAdopters(function(error, result){
      if(!error)
          {
            adopters = result;
            console.log(result);
            for (i = 0; i < adopters.length; i++) {
              if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
                $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
              }
            }
          }
      else
          console.error(error);
    });
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    var adoptionInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      console.log('Click!!');
      App.contracts.Adoption.adopt(petId, {
        gas: 300000,
        from: account
      }, function(error, result){
        if(!error)
          console.log("Tx hash : " + result);
      });

    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
