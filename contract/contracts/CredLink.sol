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
    mapping (address => address[]) interestedBorrowers;
    mapping (address => address[]) approvedBorrowers;


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

    struct lendersDetails {
        address lenderAddress;
        uint lendingAmount;
    }

    lendersDetails[] lenders; 


    // setter functions

    function lenderDeposit(uint _amount) external {
        require(_amount < 0, "cannot send zero token");
        uint lenderTokenBalance = IERC20(tokenAddress).balanceOf(msg.sender);

        if(_amount > lenderTokenBalance) {
            revert Errors.InsufficientBalance();
        }

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);

        availableLoans[msg.sender] += _amount;

        lendersDetails memory lenderData = lendersDetails({
            lenderAddress: msg.sender,
            lendingAmount: _amount
        });

        lenders.push(lenderData);

        emit Events.LenderDepositSuccessful(msg.sender, _amount);

    }

    function approveBorrower(address _borrowerToApprove) external {
        require(_borrowerToApprove != address(0), "cannot send to address zero");
        require(!borrowerData[_borrowerToApprove].hasBorrow, "cannot borrow multiple times");

        uint borrowAmount = borrowerData[_borrowerToApprove].amount;
        

        if(availableLoans[msg.sender] >= borrowAmount) {
            availableLoans[msg.sender] -= borrowAmount;
            borrowerData[_borrowerToApprove].hasBorrow = true;
            approvedBorrowers[msg.sender].push(_borrowerToApprove);

            IERC20(tokenAddress).transferFrom(address(this), _borrowerToApprove, borrowAmount);
        }

        emit Events.BorrowerApproveSuccessful(msg.sender, _borrowerToApprove, borrowAmount);
 
    }

    function applyForLoan(address _lender, uint _duration, uint _amount) external {
        require(!borrowerData[msg.sender].hasBorrow, 'repay loan to be eligible for borrowing');
        require(availableLoans[_lender] > 0, 'Not Available');

        interestedBorrowers[_lender].push(msg.sender);

        emit Events.BorrowerApplySuccessful(_lender, msg.sender, _amount, _duration); 
    }

    function repayLoan(address _lender) external {
        require(_lender != address(0), "cannot send to address zero");
        require(IERC20(tokenAddress).balanceOf(msg.sender) >= borrowerData[msg.sender].amount , "insufficient balance");

        borrowerData[msg.sender].hasBorrow = false;
        
        IERC20(tokenAddress).transferFrom(msg.sender, _lender, borrowerData[msg.sender].amount);

        emit Events.RepaySuccessful(_lender, msg.sender, borrowerData[msg.sender].amount, block.timestamp);
    }

    function openDispute() external {}


    // getter functions
    function viewInterestedBorrowers() external view returns(address[] memory){
        address[] memory interestedBorrowersdata = interestedBorrowers[msg.sender];
        return interestedBorrowersdata;
    }

    function viewAvailableLoans() external view returns(lendersDetails[] memory){
        return lenders;
    }

    function viewApproveBorrowers() external view returns(address[] memory){
        address[] memory approvedBorrowersdata = approvedBorrowers[msg.sender];
        return approvedBorrowersdata;
    }

    function openDispute() external {}

    


}
