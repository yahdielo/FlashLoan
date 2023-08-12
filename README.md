## FLashloan repo

We will be using npm and hardhat so make sure you have those installed, if not you can find plenty of information on how to get up to speed


 to start the project run in yout terminal and setting up 
 some dependencies

    npm init

    npm install --save-dev hardhat

    npm install --save-dev @nomicfoundation/hardhat-toolbox

    npm install dotenv --save

to start the hardhat ptoject

    npx hardhat

also install aave

    npm install @aave/core-v3

    npm install ethers
    
** Compile the contract

    npx hardhat compile

** deploy to mumbai

    npx hardhat run scripts/deploy.js --network polygon_mumbai



    
