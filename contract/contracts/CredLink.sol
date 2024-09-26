// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CredLinkContract {
    address owner;
    mapping (address => uint) availableLoans;
    mapping (address => borrowerDetails[]) interestedBorrowers;
    mapping (address => borrowerDetails[]) approvedBorrowers;
    
    struct borrowerDetails {
        address borrowerAddress;
        uint loanId;
        uint duration;
        uint amount;
    }

    // setter functions

    function lenderDeposit(uint _amount) external {}

    function approveBorrower(address _borrowerToApprove, uint _amount) external {}

    function applyForLoan(uint _loanId, uint _duration, uint _amount) external {}

    function repayLoan(uint loanId) external {}


    // getter functions
    function viewInterestedBorrowers() external {}

    function viewAvailableLoans() external {}

    function viewApproveBorrowers() external {}

    function openDispute() external {}

    


}
