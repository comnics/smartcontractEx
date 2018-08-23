pragma solidity ^0.4.20;

contract MyToken {
   mapping (address => uint256) public balanceOf;

   function MyToken(uint256  initialSupply) public {
       balanceOf[msg.sender] = initialSupply;
   }

   function transfer(address _to, uint256 _value) public returns (bool success) {
       require(balanceOf[msg.sender] >= _value);             // Check if the sender has enough
       require(balanceOf[_to] + _value >= balanceOf[_to]);   // Check for overflows

       balanceOf[msg.sender] -= _value;                        // Subtract from the sender
       balanceOf[_to] += _value;                               // Add the same to the recipient

       return true;
   }
}
