import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Header from "../Header"
import HeaderPanel from './HeaderPanel'
import './Details.css'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import {
    fade,
    makeStyles,
} from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core'
import GetDataFromDb from '../data/getDataFromDatabase';
import { currentUser } from '../../Redux/actions';
import ImageUploader from 'react-images-upload';

function Details(props) {
    const [item, setItem] = useState("");
    const [isReady, setIsReady] = useState(false);
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        getMagasinDataFromDatabse();

        async function getMagasinDataFromDatabse() {
            const data = await firebase.getCurrentMagasinData();
            console.log(data)
            dispatch(currentUser(data))
            setItem(data)
            setIsReady(true)
        }
    }, [])

    const useStylesReddit = makeStyles((theme) => ({
        root: {
            border: '1px solid #e2e2e1',
            overflow: 'hidden',
            borderRadius: 4,
            backgroundColor: 'white',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
                backgroundColor: 'white',
            },
            '&$focused': {
                backgroundColor: 'white',
                boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main,
            },
        },
        focused: {},
    }));

    const classes = useStylesReddit();

    if (!firebase.getCurrentUserUid()) {
        alert('Identifiez-vous')
        props.history.replace('/')
        return null
    }

    function formDetailsSent() {
        const newData = item;
        firebase.sendDataToDatabase(newData);
        setItem(newData)
        dispatch(currentUser(newData))
        setIsSuccessVisible(true)
    }



    return isReady && (
        <div>
            <Header />
            <div className="containerPanelContent">
                <div className="panelLeftContent">
                    <HeaderPanel />
                </div>
                <div className="panelRightContent">
                    <div className="panelRightTitle">
                        <h2>Détails du magasin</h2>
                        <p>Modifiez les détails de votre magasins</p>
                    </div>
                    <form>
                        <table>
                            <tbody>
                                <tr className="containerRowForm">
                                    <td className="containerLabel">Nom de votre magasin :</td>
                                    <td>
                                        <div className="containerInput">
                                            <TextField className={classes.root} variant="filled" name="name" type="text" id="name" value={item != undefined ? item.name : ""} onChange={e => setItem({ ...item, name: e.target.value })} label="Nom du magasin" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="containerLabel">Description courte :</td>
                                    <td>
                                        <div className="containerInput">
                                            <TextField className={classes.root} variant="filled" name="description" type="text" id="description" value={item != undefined ? item.description : ""} onChange={e => setItem({ ...item, description: e.target.value })} label="Courte description" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <Button variant="contained" color="primary" onClick={() => formDetailsSent()}>{firebase.isStoreActive() === "true" ? "Sauvegarder" : "Créer mon magasin"}</Button>

                        {isSuccessVisible && <div>Les changements ont bien été mis à jour !</div>}
                    </form>


                </div>
            </div>
        </div>

    )
}


export default withRouter(Details)