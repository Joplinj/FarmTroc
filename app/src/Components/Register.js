import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import firebase from "./firebase"
import { withRouter } from 'react-router-dom'

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form onSubmit={e => e.preventDefault() && false}>
                <input name="email" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input name="password" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input name="name" type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <Button
                type="submit"
                onClick={onRegister}
                >
                    Valider
                </Button>
            </form>
        </div>
    )

    async function onRegister() {
        try {
            await firebase.register(name, email, password)
            props.history.replace('/panel/dashboard')
        } catch(error) {
            alert(error.message)
        }
    }
}

export default withRouter(Register)