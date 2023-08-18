const hre = require("hardhat");
const { ethers } = require("ethers");
require('dotenv').config()

//goerli aave token addresses
const Usdc = "0x65aFADD39029741B3b8f0756952C74678c9cEC93";
const DAI = "0xBa8DCeD3512925e52FE67b1b5329187589072A55";
const LINK = "0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29";

async function main() {
  // Connect to the Ethereum network
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ALCHEMY_GOERLI);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // Load the contract ABI and address
  const flashLoanAddress = "0x35a3B711090BDd2FC6Df53f503af2fb20EAAFB98";
  const flashLoanABI = require("../artifacts/contracts/FLashLoanSimple.sol/SimpleFlashLoan.json"); // Load the ABI here

  // Create a contract instance
  const flashLoanContract = new ethers.Contract(flashLoanAddress, flashLoanABI, wallet);

  // Call the executeOperation function
  const tx = await flashLoanContract.RequestFlashLoan(
    LINK, "10000000000000000000"
  );

  // Wait for the transaction to be mined
  const receipt = await tx.wait();

  console.log(receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
