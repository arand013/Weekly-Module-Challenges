pragma solidity >=0.7.0 <0.9.0;

contract thisGame {

    uint public playerCount = 0;
    mapping (address => Player) public players;

    enum Level {Novice, Intermediate, Advanced}

    struct Player {
        address playerAddress;
        Level playerLevel;
        string firstName;
        string lastName;
    }


}