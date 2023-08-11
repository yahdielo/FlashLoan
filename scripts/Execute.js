const hre = require("hardhat");
const { ethers } = require("ethers");

require('dotenv').config()

const UsdcAddress = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"

async function main() {
  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_PROVIDER);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // Load the contract ABI and address
  const flashLoanAddress = "0x7Eaab3266108DBbb0dc8Aeced40F9657BC4B8ee3";
  const flashLoanABI = require("../artifacts/contracts/FLashLoanSimple.sol/SimpleFlashLoan.json"); // Load the ABI here

  // Create a contract instance
  const flashLoanContract = new ethers.Contract(flashLoanAddress, flashLoanABI, wallet);

  // Call the executeOperation function
  const tx = await flashLoanContract.RequestFlashLoan(
    UsdcAddress, 1000000000
  );

  // Wait for the transaction to be mined
  const receipt = await tx.wait();

  console.log("Transaction receipt:", receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
