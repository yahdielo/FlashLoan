import React from 'react';
import './styles/Header.css'

function Header() {

    return (
        <div className="Header">
            <div className="nav-button">
                <button href="#docs">Docs</button>
                <button href="#about">About me</button>
            </div>
            <button className="Connect-wallet">connect wallet</button>
        </div>
    );

}

export default Header;