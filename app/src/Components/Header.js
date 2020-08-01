import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div class="containerHeader">
                <div class="headerBar">
                    <div class="logoContainer">
                        <p>Mon logo</p>
                    </div>
                    <div class="menuContainer">
                        <div class="menu">
                            <ul>
                                <li><a href="#">Carte</a></li>
                                <li><a href="#">Comment ça marche ?</a></li>
                                <li><a href="#">Connexion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;