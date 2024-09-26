import { ethers } from "hardhat";

async function main() {
    const CredLinkTokenAddress = "0x87708894cAfA31b6ba31E3ef145174948d9f829d";
    const CredLinkToken = await ethers.getContractAt("IERC20", CredLinkTokenAddress);

    const CredLinkContractAddress = "0x9F94722FCD154C9372Cf775AA21A60E77a0168DF";
    const CredLink = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction

    const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance beefore:::", contractBalanceBeforeWithdrawal);

    const withdrawAmount = ethers.parseUnits("100", 18);
    const withdrawTx = await saveERC20.withdraw(withdrawAmount);

    console.log(withdrawTx);

    withdrawTx.wait();

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();

    console.log("Contract balance after withdrawal:::", contractBalanceAfterWithdrawal);


    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
