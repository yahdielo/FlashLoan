## FLashloan repo

We will be using npm and hardhat so make sure you have those installed, if not you can find plenty of information on how to get up to speed


* if you are cloning this repo:

 to start the project run in yout terminal and setting up 
 some dependencies

    npm init

    npm install --save-dev hardhat

also install aave

    npm install @aave/core-v3

    npm install ethers
    
** Compile the contract

    npx hardhat compile

** deploy to mumbai

    npx hardhat run scripts/deploy.js --network <network_name>
