import React from 'react';
import { Link } from "react-router-dom";
import './HeaderPanel.css'
import { MdDashboard } from "react-icons/md";
import { FaCog, FaShoppingBag } from "react-icons/fa";
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'

function HeaderPanel(props) {

    async function logOutCall() {
        await firebase.logout();
        props.history.replace('/')
    }

    return (
        <div className="containerHeaderPanel">
            <div className="headerHeaderPanel">
                <h3>Panel de gestion</h3>
                <p>Dans ce panel, vous pouvez gérer les détails de votre magasin, vos stocks, vos préférences etc...</p>
            </div>
            <div className="containerLinksHeaderPanel">
                <div className="containerItemLinkHeaderPanel">
                    <Link className="itemLinkHeaderPanel" to="/panel/dashboard"> <MdDashboard size="20" className="iconItemHeaderPanel" />Tableau de bord</Link>
                </div>
                <div className="containerItemLinkHeaderPanel">
                    <Link className="itemLinkHeaderPanel" to="/panel/details"> <FaCog size="20" className="iconItemHeaderPanel" />Détails du magasin</Link>
                </div>
                <div className="containerItemLinkHeaderPanel">
                    <div className="itemLinkHeaderPanel"> <FaShoppingBag size="20" className="iconItemHeaderPanel" />Gérer mes stocks</div>
                </div>
                <div className="containerItemLinkHeaderPanel">
                    <div onClick={() => logOutCall()} className="itemLinkHeaderPanel"> <FaShoppingBag size="20" className="iconItemHeaderPanel" />Déconnexion</div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HeaderPanel);