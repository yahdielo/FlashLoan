import logo from './logo.svg';
import Header from '../src/components/Header.js';
import body from './components/body.js'
import { ethers } from 'ethers';
import { useState, useEffect} from 'react';

const flashloanAdress = "0xcaf671fefe33309603e44457945519e0ebcc2e26";
//import contract abi
function App() {

  //
  const [currentAccount, setCurrentAccount] = useState(null);

  //if ethereum swallet state is not detected, handle err elseconnect account
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

  }


  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        { Header() }
      </header>
      <body classNmae="App-body">
        { body() }
      </body>
    </div>
  );
}

export default App;
