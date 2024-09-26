// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./interfaces/IERC20.sol";
import "./lib/Errors.sol";
import "./lib/Events.sol";

contract CredLinkContract {
    address owner;
    address tokenAddress;
    mapping (address => uint) availableLoans;
    mapping (address => borrowerDetails[]) interestedBorrowers;
    mapping (address => borrowerDetails[]) approvedBorrowers;

    mapping(address => borrowerDetails) borrowerData;

    constructor(address _tokenAddress) {
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }
    
    struct borrowerDetails {
        uint duration;
        uint amount;
        bool hasBorrow;
    }

    // setter functions

    function lenderDeposit(uint _amount) external {
        require(_amount < 0, "cannot send zero token");
        uint lenderTokenBalance = IERC20(tokenAddress).balanceOf(msg.sender);

        if(_amount > lenderTokenBalance) {
            revert Errors.InsufficientBalance();
        }

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);

        availableLoans[msg.sender] += _amount;

        emit Events.LenderDepositSuccessful(msg.sender, _amount);

    }

    function approveBorrower(address _borrowerToApprove) external {
        require(_borrowerToApprove != address(0), "cannot send to address zero");
        require(!borrowerData[_borrowerToApprove].hasBorrow, "cannot borrow multiple times");

        uint borrowAmount = borrowerData[_borrowerToApprove].amount;

        if(availableLoans[msg.sender] >= borrowAmount) {
            availableLoans[msg.sender] -= borrowAmount;
            borrowerData[_borrowerToApprove].hasBorrow = true;

            IERC20(tokenAddress).transferFrom(address(this), _borrowerToApprove, borrowAmount);
        }

        emit Events.BorrowerApproveSuccessful(msg.sender, _borrowerToApprove, borrowAmount);
 
    }

    function applyForLoan(uint _loanId, uint _duration, uint _amount) external {}

    function repayLoan(uint loanId) external {}


    // getter functions
    function viewInterestedBorrowers() external {}

    function viewAvailableLoans() external {}

    function viewApproveBorrowers() external {}

    function openDispute() external {}

    


}
