import React, { useEffect } from 'react';
import Header from "../Header"
import HeaderPanel from './HeaderPanel'
import './Dashboard.css'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { currentUser } from '../../Redux/actions';


function Dashboard(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        getMagasinDataFromDatabse();

        async function getMagasinDataFromDatabse() {
            const data = await firebase.getCurrentMagasinData();
            dispatch(currentUser(data))
        }
    }, [])


    if (!firebase.getCurrentUserUid()) {
        alert('Identifiez-vous')
        props.history.replace('/')
        return null
    }

    async function beforeCreateStore() {
        await firebase.createStore()
        props.history.replace('/panel/details')
    }

    return (
        <div>
            <Header />
            <div className="containerPanelContent">
                <div className="panelLeftContent">
                    <HeaderPanel />
                </div>
                <div className="panelRightContent">
                    <h2>Tableau de bord </h2>
                    {firebase.isStoreActive() === "true" ? (
                        ""
                    ) :
                        <div>
                            <p>Vous n'avez pas encore de magasin.</p>
                            <Button
                                onClick={() => beforeCreateStore()}
                                variant="contained"
                                color="primary"
                            >
                                Créer un magasin
                        </Button>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}


export default withRouter(Dashboard)