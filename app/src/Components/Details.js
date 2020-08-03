import React, { Component } from 'react';
import './css/Details.css'
import { FaGlobeEurope, FaTree, FaStar } from "react-icons/fa";

class Details extends Component {
    render() {
        const { isVisible, item } = this.props;
        return (
            <div className="containerDetails" style={{ left: isVisible ? "0" : "-400px" }}>
                <div className="itemHeader">
                    <h2>{item.title}</h2>
                    <div className="conainterDetailsStar">
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <span>{item.vote} avis</span>
                    </div>

                </div>
                <div className="containerDetailsImage">
                    <img src={item.image_path} />
                </div>
                <div className="containerFeaturesIconsDetails">
                    <FaTree size="30" color='#3c6382' className="featureIconDetails" />
                    <FaGlobeEurope size="30" color='#78e08f' className="featureIconDetails" />
                </div>
                <div className="separatorLight"></div>
                <div className="containerDescriptionDetails">
                    <h4>Description du lieu:</h4>
                    <p>{item.description}</p>
                </div>
                <div className="separatorLight"></div>
            </div>
        );
    }
}

export default Details