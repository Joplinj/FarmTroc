import React from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyBmDcBjMAWkMGM-jNEVQjeLaUcZEXpTOF8",
    authDomain: "farmap-267c1.firebaseapp.com",
    databaseURL: "https://farmap-267c1.firebaseio.com",
    projectId: "farmap-267c1",
    storageBucket: "farmap-267c1.appspot.com",
    messagingSenderId: "1053727943256",
    appId: "1:1053727943256:web:a176ec267584ff56c9f82d"

};
// Initialize Firebase


class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        await this.auth.currentUser.updateProfile({
            displayName: "false"
        })

    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    getCurrentUserUid() {
        return this.auth.currentUser && this.auth.currentUser.uid
    }

    async getCurrentMagasinData() {
        const uid = this.auth.currentUser.uid;
        const doc = this.db.collection('magasins').doc(uid);
        const snap = await doc.get();
        const data = snap.data();
        return data;
    }

    async createStore() {
        const currentUserUid = this.auth.currentUser.uid;
        const magasins = this.db.collection('magasins');
        await magasins.doc(currentUserUid).set({
            active: false, description: "", geo: [43, 2],
            image_path: "", name: ""
        });
        return this.auth.currentUser.updateProfile({
            displayName: "true"
        })
    }

    isStoreActive() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    sendDataToDatabase(data) {
        const uid = this.auth.currentUser.uid;
        const doc = this.db.collection('magasins').doc(uid);
        const request = doc.get().then((response) => {
            if(response.data() != undefined) {
                console.log("Un magasin existe !");
                const update = doc.update(data);
            }
            else {
                console.log("Aucun magasin n'existe");
                const create = doc.set({
                    active: false, description: data.description, geo: [43, 2],
                    image_path: "", name: data.name
                })
                return this.auth.currentUser.updateProfile({
                    displayName: "true"
                })
            }
        })
    }
}



export default new Firebase()