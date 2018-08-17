pragma solidity ^0.4.17;

contract AdvancedAdoption {
    address owner;
    
    struct Adopter{
      address addr;
      string name;
      uint price;
    }
    
    Adopter[16] public adopters;
    
    constructor() public{
        owner = msg.sender;
    }
    
    // Adopting a pet
    function adopt(uint petId, string name) payable public returns (uint) {
        require(petId >= 0 && petId <= 15);
    
        adopters[petId].addr = msg.sender;
        adopters[petId].name = name;
        adopters[petId].price = msg.value;
        
        owner.transfer(msg.value);
    
      return petId;
    }
    
    // Retrieving the adopters
    function getAdopters() public view returns (address[16]) {
        address[16] memory tmpAdopters;
        for(uint8 i = 0 ; i < 16 ; i++){
            tmpAdopters[i] = adopters[i].addr;
        }
        
      return tmpAdopters;
    }

}
