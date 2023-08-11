require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/_pXKkAyrl5H0_vJyCQqvpD_807nh46Ba",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
