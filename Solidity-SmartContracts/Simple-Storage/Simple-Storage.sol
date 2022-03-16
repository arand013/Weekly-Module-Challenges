pragma solidity >= 0.4.16 <0.9.0;

contract SimpleStorage {
    uint public storedNumbers; 

    function setAnumber(uint x) public {
        storedNumbers = x; 
    }

    function getTheNumberBack() public view returns (uint) {
        return storedNumbers;
    }
}

