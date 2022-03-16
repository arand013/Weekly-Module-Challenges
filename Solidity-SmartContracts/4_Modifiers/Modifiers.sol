pragma solidity >=0.7.0 <0.9.0; 

contract ModifierToken {
    address public minter; 
    mapping (address => uint) public balances;

    event Sent(address from, address to, uint amount);

    modifier onlyMinter {
        require(msg.sender == minter,"Only the minter can call this function");
        _;
    }

    modifier amountGreaterThan(uint amount) {
           require(amount < 1e60);
        _;
    }

  
}