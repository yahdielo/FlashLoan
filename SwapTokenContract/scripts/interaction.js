const hre = require("hardhat");
const { ethers } = require("ethers");

require('dotenv').config();

const Link = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
async function main() {

    //Set up goerli provider
    const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_ENPOINT);
    // create a instance of your wallet for signer
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    // Load contract ABi and addres
    const contractAddress = "0x8a33472158346C396a20A06f8556aA2EDe6b74e9";
    const contractABI = require("../artifacts/contracts/SimpleSwap.sol/SimpleSwap.json");
    //pass wallet, contract address and the ABi to creat a instance of the contrcat
    const SwapContract = new ethers.Contract(contractAddress, contractABI, wallet);

    // call contract function
    //1000000000000000000 1 DAI, link or eth are 1e18 so make sure to have 18 zeros after the desire amount
    //const tx = await SwapContract.swapExactInputSingle("2000000000000000000");
    //console.log(tx.Object);
    const tokenBalance = await SwapContract.getTokenBalance(Link);
    console.log(tokenBalance);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
