import React from 'react';
import './css/Header.css';

function Header() {
    return (
        <header>
            <div className="containerHeader">
                <div className="headerBar">
                    <div className="logoContainer">
                        <p>Mon logo</p>
                    </div>
                    <div className="menuContainer">
                        <div className="menu">
                            <ul>
                                <li><a>Carte</a></li>
                                <li><a>Comment ça marche ?</a></li>
                                <li><a>Connexion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;