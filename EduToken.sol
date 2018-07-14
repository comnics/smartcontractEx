pragma solidity ^0.4.6;

contract EduToken{
    address owner;  //토크 소유자 주소
    uint256 public totalSupply; //토탈 통화량
    string public name; //토큰 이름
    string public symbol; //토큰 심볼
    uint8 public decimals = 18; //소숫점이하 자릿 수

    //주소별 잔고량
    mapping (address => uint256) public balanceOf;

    //생성자로 처음 생성시 초기 통화량과 이름, 심볼을 정한다.
    //추가적으로 owner를 생성하는 주소로 저장한다.
    function EduToken(uint256 initialSupply, string _name, string _symbol) {
        balanceOf[msg.sender] = initialSupply;
        name = _name;
        symbol = _symbol;
        
        totalSupply = initialSupply;
        
        owner = msg.sender;
    }

    //토큰 전송
    function transfer(address _to, uint256 _value) {
        require(balanceOf[msg.sender] >= _value);
        
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
    } 

    //토큰 발행
    function mintToken(uint256 _v){
        require(msg.sender == owner);
        
        totalSupply += _v;
        balanceOf[msg.sender] += _v;
    }

    //토큰 소각
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
