pragma solidity ^0.4.16;

contract HelloWorld{
    string strTmp;
    
    function HelloWorld() public {
        strTmp = "Hello";
    }
    
    function setString(string _v) public returns(bool){
        strTmp = _v;
        
        return true;
    }
    
    function getString() public view returns(string){
        return strTmp;
    }
}
