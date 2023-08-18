# Uniswap

 Uniswap is a decentralize exchane on the ethereum network,
 wirh un like traditional finance uniswap uses AMM (automatic market maker)
 for the token trading pairs, basically liquidity is divided in two pool for exaple,
 DAI/WETH  you will have one pool containing weth and the other pool holding DAI tokens.

 As AMM is prices are revated from the pools fluctuations , if you want some dai you deposite some WETh,
 and Dai becomes more scares and so it becomes more expensive, and this also opens oportunities for arbitrage,
 because pools prices are a contrant product of the pool balances. so prices might change from DEX to DEX

In this repo has smart contract that can swap tokens assusming the tokens are in the smart contract,
and not on a wallet wish we have to aprove the spending og the tokens.

## ERROR to look out

if you are cloning this repo make sure to run:

        npm init

        npm install --save-dev hardhat

        npm install --save-dev @nomicfoundation/hardhat-toolbox

        npm install dotenv --save

        npm install @uniswap/v3-core

you might have problem at the compilation where it doesnt recognize some dependencies,
in that case delet the package.json, package-loch.json and last node_modules, ones you deleted them
install all the dependencies again. and you mmight have to do that one or two times.

* when you are executing the contract fucntions make sure is loaded with some tokens to perform the swaps.

* currently the executesingleswap is hardcoded to swap some link tokens for WETH , the parameter amount is how much link you want to swap for weth, Note to self, make this a dinamic fucntion, to pass the desire token we want to swap and the amount as arguments




# compile and deploy

 To compile the solidity contract run :

    npx hardhat compile

to depploy the contract to the goerli testnet:

    npx hardhat run scripts/deploy.js --network goerli

# addreses 
this is the addres of the contract i already deployed in case you want ot interact with it:

This addreses are in from the goerli network, if you want to integrate different tokens , make sure you firs are hable to trade them in the uniswap goerli UI , not all token of mainnnet are avaliable in the testnet.

* Single Swap ontract addres: 0x059fe9d8bfcf9096e029decfe3849ea28713b091
* Flash Loan contract address : 0x059fe9d8bfcf9096e029decfe3849ea28713b091
* DAI = 0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844
* LINK = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
* WETH = 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6