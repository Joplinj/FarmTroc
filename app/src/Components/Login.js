import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import firebase from "./firebase"
import { withRouter } from 'react-router-dom'
import './css/Login.css'

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [wichVisible, setwichVisible] = useState('connexion');

    function toogleVisible(val) {
        setwichVisible(val)
        setEmail("")
        setPassword("")
    }

    function setForm() {
        if (wichVisible === "connexion") {
            return (
                <div>
                    <form className="formLogin" onSubmit={e => e.preventDefault() && false}>
                        <div>
                            <h3>Connexion</h3>
                        </div>
                        <div className="containerInput">
                            <TextField fullWidth name="email" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} label="Email" />
                        </div>
                        <div className="containerInput">
                            <TextField fullWidth name="password" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} label="Mot de passe" />
                        </div>
                        <div className="containerButtonSubmit">
                            <Button variant="contained" color="primary" type="submit" onClick={onLogin}>Valider</Button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <form className="formLogin" onSubmit={e => e.preventDefault() && false}>
                        <div>
                            <h3>Inscription</h3>
                        </div>
                        <div className="containerInput">
                            <TextField fullWidth autoComplete="off" name="email" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} label="Email" />
                        </div>
                        <div className="containerInput">
                            <TextField fullWidth name="password" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} label="Mot de passe" />
                        </div>
                        <div className="containerButtonSubmit">
                            <Button variant="contained" color="primary" type="submit" onClick={onRegister}>Valider</Button>
                        </div>
                    </form>
                </div>
            )
        }
    }

    return (
        <div className="containerLoginBackground">
            <div className="boxLoginRegister">
                <div className="containerButtonsLoginRegister">
                    <Button
                        onClick={() => toogleVisible("connexion")}
                        className="buttonsLoginRegister"
                        style={{ 
                            backgroundColor: wichVisible === "connexion" ? "white" : "rgb(226, 226, 226)",
                            color: wichVisible === "connexion" ? "black" : "rgb(140, 140, 140)",
                            padding: "15px 20px"
                        }}
                    >
                        Connexion</Button>
                    <Button
                        onClick={() => toogleVisible("inscription")}
                        className="buttonsLoginRegister"
                        style={{ 
                            backgroundColor: wichVisible === "inscription" ? "white" : "rgb(226, 226, 226)",
                            color: wichVisible === "inscription" ? "black" : "rgb(140, 140, 140)",
                            padding: "15px 20px"
                        }}
                    >
                        Inscription
                    </Button>
                </div>
                {setForm()}
            </div>
        </div>
    )

    async function onLogin() {
        try {
            await firebase.login(email, password)
            props.history.replace('/panel/dashboard')
        } catch (error) {
            alert(error.message)
        }
    }

    async function onRegister() {
        try {
            await firebase.register(email, password)
            props.history.replace('/panel/dashboard')
        } catch (error) {
            alert(error.message)
        }
    }
}

export default withRouter(Login)