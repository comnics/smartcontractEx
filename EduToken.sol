pragma solidity ^0.4.6;

contract EduToken{
    address owner;
    uint256 public totalSupply;
    string public name;
    string public symbol;
    uint8 public decimals = 18;

    
    mapping (address => uint256) public balanceOf;

    function EduToken(uint256 initialSupply, string _name, string _symbol) {
        balanceOf[msg.sender] = initialSupply;
        name = _name;
        symbol = _symbol;
        
        totalSupply = initialSupply;
        
        owner = msg.sender;
    }

    function transfer(address _to, uint256 _value) {
        require(balanceOf[msg.sender] >= _value);
        
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
    } 

    function mintToken(uint256 _v){
        require(msg.sender == owner);
        
        totalSupply += _v;
        balanceOf[msg.sender] += _v;
    }

    function burnToken(uint256 _value) public returns (bool success) {
        require(msg.sender == owner);
        require(balanceOf[msg.sender] >= _value);   // Check if the sender has enough

        balanceOf[msg.sender] -= _value;            // Subtract from the sender
        totalSupply -= _value;                      // Updates totalSupply

        return true;
    }
    
    function getBalance(address _addr) public constant returns(uint256){
        return balanceOf[_addr];
    }
    

}
