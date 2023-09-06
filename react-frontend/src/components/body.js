import React from 'react';
import './styles/body.css'

function body() {
    return (
        <div class="body" aling="center">

            <div className="column2-3">
                <div className="card">
                    <h1>Experience flashloans</h1>
                </div>
            </div>
            <div class="column4">
            </div>
            
            <div class="row1-col1">
            </div>
            <div class="row1-col2-to-col3">
                <p>
                    Popularize  by Aave protocol in 2020 flahs loan are a revolutionary way of borrowing money at light speed
                    with no colateral, the posibilities are endless.
                </p>
            </div>

            <div class="row1-col4">
            </div>
            <div clas="row2-col1">
            </div>
            <div class="row2-col2-col3">
                <div class="main-content-tokens">
                    <p>choose what token to borrow:</p>
                    <div class="token-buttons">
                        <button>LINK</button>
                        <button>SUCHI</button>
                        <button>DAI</button>
                    </div>
                </div>
            </div>
            <div class="row2-col4"></div>
            <div class="row3-col1"></div>
            <div class="row3-col2-col3">
                <div class="main-contentv2"></div>
                <div class="main-contentv2-text">
                    <p>Type the amount you desire to borrow:</p>
                </div>
                <input type="text" placeholder="Amount < 10,000">
                </input>
            </div>
            <div class="row3-col4"></div>
            <div class="row4-col1"></div>
            <div class="row4-col2-col3">
                <button> Execute flashloan</button>
                <p> whats transaction on etherscan:</p>
            </div>
        </div>
    )
}

export default body;