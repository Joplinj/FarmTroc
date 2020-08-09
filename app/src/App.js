import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Panel from './Components/Panel/Panel'
import Dashboard from './Components/Panel/Dashboard'
import Details from './Components/Panel/Details'
import Map from './Components/Map'
import Register from './Components/Register'
import { CircularProgress } from '@material-ui/core';
import firebase from './Components/firebase'


function App() {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

    useEffect(() => {
        firebase.isInitialized().then(val => {
            setFirebaseInitialized(val)
        })
    })


    return firebaseInitialized !== false ? (
        < Router >
            <Switch>
                <Route exact path="/">
                    <Map />
                </Route>
                <Route exact path="/panel">
                    <Panel />
                </Route>
                <Route exact path="/inscription">
                    <Register />
                </Route>
                <Route exact path="/panel/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/panel/details">
                    <Details />
                </Route>
            </Switch>
        </Router >
    ) :
        <div className="loader"> <CircularProgress /></div>
}

export default App