//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MyFirstContract {

   uint256 number;


   function setNumber(uint256 _num) public returns (uint256){
       console.log("setNumber() w/ num:", _num);
       number = _num;
       return number;
   }


   function getNumber() public view returns (uint256){
       console.log("getNumber() w/ num:", number);
       return number; 
   }
}

