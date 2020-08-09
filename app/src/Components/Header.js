import React, { useState } from 'react';
import './css/Header.css';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core'
import Login from './Login'
import firebase from './firebase'

function Header() {

    const [loginOpened, setLoginOpened] = useState(false);
    // const [registerOpened, setRegisterOpened] = useState(false);

    // const [isLoggedIn, setisLoggedIn] = useState(false);

    function displayLogin() {
        setLoginOpened(!loginOpened);
    } 

    function checkIfUserLogged() {
        const isLogged = firebase.getCurrentUserUid();
        if(isLogged) {
            return <li><Link to="/panel/dashboard">Mon magasin</Link></li>
        }
        else {
            return <li><Button onClick={() => displayLogin()}>Connexion</Button> </li>;
        }
    }

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
                                <li><Link to="/">Carte</Link></li>
                                <li><a>Comment ça marche ?</a></li>
                                {checkIfUserLogged()}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {loginOpened ? <Login /> : ""}
        </header>
    );
}

export default Header;