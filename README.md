## FLashloan repo

We will be using npm and hardhat so make sure you have those installed, if not you can find plenty of information on how to get up to speed. Currently the flashloan smart contract request from aave SimpleRecieverBace() wish allows us to borrow the fuunds, ones we hold the funds we can perform some logic for arbitrage or some other oportunity.

This is a transaction wish i called using the execution file in the script directory:

    https://mumbai.polygonscan.com/tx/0x6bc10f44ece26f0ce48a970a6be7654846b0448964b95dd41caf05f111bf21fc

in the transaction you can see i borrowed 1,000 usdc and then proceded to pay back the loan plus .05 % fee of the loan amount.

# TestNet

 Currently this project is set up to use the Poligon Mumbai testnet, you can feel free to play
 with the harhat.config.js file and set up another network like Goerli, test nets allow us to creat smart contract
 and play with them in a "safe" enviroment where we dont pay real eth or matic to test our smart contracts and crat transactions.

 This test nets have their own testEth ot matic you can claim in Faucets luje this one: https://faucet.polygon.technology/

# Dependencies

 to start the project run in yout terminal and setting up 
 some dependencies

    npm init

    npm install --save-dev hardhat

    npm install --save-dev @nomicfoundation/hardhat-toolbox

    npm install dotenv --save

to start the hardhat ptoject

if you are cloning this repo dotn run this command

    npx hardhat

also install aave

    npm install @aave/core-v3

    npm install ethers


    
** Compile the contract

    npx hardhat compile

** deploy to mumbai

    npx hardhat run scripts/deploy.js --network polygon_mumbai



    
