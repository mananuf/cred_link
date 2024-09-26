// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

library Events {
    event LenderDepositSuccessful(address indexed _depositor, uint indexed _amount);

    event BorrowerApproveSuccessful(address indexed _approverAddress, address indexed _borrowerAddress, uint indexed _amount);
}
