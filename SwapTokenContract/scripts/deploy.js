
const hre = require("hardhat");

async function main() {
  const SingleSwap= await hre.ethers.getContractFactory("SimpleSwap");
  const singleSwap = await SingleSwap.deploy("0xE592427A0AEce92De3Edee1F18E0157C05861564");

  await singleSwap.waitForDeployment();

  console.log(`contract address : ${singleSwap.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
