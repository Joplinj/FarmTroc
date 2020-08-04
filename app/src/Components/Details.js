import React, { Component } from 'react';
import './css/Details.css'
import { FaGlobeEurope, FaTree, FaStar, FaChevronRight } from "react-icons/fa";
import { GiCookingPot, GiCorn } from "react-icons/gi";
import Offers from './Offers';
import { useSelector, useDispatch } from 'react-redux'
import { openOffers } from '../Redux/actions/index'


//  const toogleOffers = () => {
//     if (this.state.offersOpen) {
//         this.setState({
//             offersOpen: false
//         })
//         setTimeout(() => {
//             this.setState({
//                 offersOpen: true
//             })
//         }, 400);
//     }
//     else {
//         this.setState({
//             offersOpen: true
//         })
//     }
// }

function Details(isVisible) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         offersOpen: false,
    //     }
    // }
const isDetailsOpen = useSelector(state => state.isDetailsOpen.opened);
const dataDetails = useSelector(state => state.isDetailsOpen.item);
const isOffersOpen = useSelector(state => state.openOffers);
const dispatch = useDispatch();
    return (
        <div>
            <div className="containerDetails" style={{ left: isDetailsOpen ? "0" : "-400px" }}>
                <div className="itemHeader">
                    <h2>{dataDetails.title}</h2>
                    <div className="conainterDetailsStar">
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <span>{dataDetails.vote} avis</span>
                    </div>

                </div>
                <div className="containerDetailsImage">
                    <img src={dataDetails.image_path} />
                </div>
                <div className="containerFeaturesIconsDetails">
                    <FaTree size="30" color='#3c6382' className="featureIconDetails" />
                    <FaGlobeEurope size="30" color='#78e08f' className="featureIconDetails" />
                </div>
                <div className="separatorLight"></div>
                <div className="containerDescriptionDetails">
                    <h4>Description du lieu:</h4>
                    <p>{dataDetails.description}</p>
                </div>
                <div className="separatorLight"></div>
                <div className="containerActionsDetails">
                    <div onClick={() => dispatch(openOffers())} className="ActionItemDetails">
                        <div className="ActionItemLabel">
                            <GiCookingPot size="25" color='#3c6382' className="ActionItemIconLabel" />
                            <span>Nos plats préparés</span>
                        </div>
                        <FaChevronRight size="15" color='#3C4043' className="ActionItemIcon" />
                    </div>
                    <div onClick={() => dispatch(openOffers())} className="ActionItemDetails">
                        <div className="ActionItemLabel">
                            <GiCorn size="25" color='#3c6382' className="ActionItemIconLabel" />
                            <span>Nos récoltes</span>
                        </div>
                        <FaChevronRight size="15" color='#3C4043' className="ActionItemIcon" />
                    </div>
                </div>
            </div>
            <Offers
                isVisible={isOffersOpen}
                offers={dataDetails.offers}
            />
        </div>
    );
}

export default Details