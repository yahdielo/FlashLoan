const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const FlashLoan = await hre.ethers.getContractFactory("SimpleFlashLoan");
  const flashLoan = await FlashLoan.deploy(
    "0xC911B590248d127aD18546B186cC6B324e99F02c"
  );

  await flashLoan.waitForDeployment()

  console.log("Flash loan contract deployed: ", flashLoan.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});