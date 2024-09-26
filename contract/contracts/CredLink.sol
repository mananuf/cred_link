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
        uint duration;
        uint amount;
    }

    // setter functions
    function lenderDeposit(uint _amount) external {}

    function approveBorrower(address _borrowerToApprove, uint _amount) external {}

    function applyForLoan(address _lender, uint _duration, uint _amount) external {
        require(availableLoans[_lender] > 0, 'Not Available');
        
        interestedBorrowers[_lender].push(borrowerDetails({
            borrowerAddress: msg.sender,
            duration: _duration,
            amount: _amount
        }));

    }

    function repayLoan(uint loanId) external {}


    // getter functions
    function viewInterestedBorrowers() external {}

    function viewAvailableLoans() external {}

    function viewApproveBorrowers() external {}

    function openDispute() external {}

    


}
