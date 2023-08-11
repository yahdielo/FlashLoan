const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const FlashLoan = await hre.ethers.getContractFactory("SimpleFlashLoan");
  const flashLoan = await FlashLoan.deploy(
    "0xeb7A892BB04A8f836bDEeBbf60897A7Af1Bf5d7F"
  );

  await flashLoan.deploy();

  console.log("Flash loan contract deployed: ", flashLoan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});