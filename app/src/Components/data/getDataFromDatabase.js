import React, { useEffect } from 'react'
import { currentUser } from '../../Redux/actions';
import { useDispatch } from 'react-redux'
import firebase from '../firebase'


function GetDataFromDb() {
    const dispatch = useDispatch();
    useEffect(() => {

        const currentUserId = firebase.getCurrentUserUid();
        getMagasinDataFromDatabse();

        async function getMagasinDataFromDatabse() {
            const data = await firebase.getCurrentMagasinData(currentUserId);
            console.log(data)
            dispatch(currentUser(data))
        }
    }, [])
    return null
}

export default GetDataFromDb;