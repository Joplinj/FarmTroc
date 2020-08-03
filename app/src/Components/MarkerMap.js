import React, { Component } from 'react';
import { FaMapMarkerAlt, FaGlobeEurope, FaTree, FaStar } from "react-icons/fa";
import './css/MarkerMap.css'
import { Button } from '@material-ui/core';

class MarkerMap extends Component {
    render() {
        const { item, text, color, bio, vote, offers, layerOpen, callbackIsOpen, callbackIsDetail } = this.props;
        return (
            <div className="markerMap">
                <div style={{ display: layerOpen === text ? "block" : "none" }} className="layer">
                    <h2>
                        {text}
                    </h2>
                    <div className="containerStarIcon">
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <FaStar size="15" color="yellow" className="starIcon" />
                        <span>{vote} avis</span>
                    </div>

                    <div className="containerFeaturesIcons">
                        {bio ? <FaGlobeEurope size="20" color='#78e08f' className="featureIcon" /> : null}

                        <FaTree size="20" color='#3c6382' className="featureIcon" />
                        <FaGlobeEurope size="20" color='#78e08f' className="featureIcon" />
                        <FaGlobeEurope size="20" color='#78e08f' className="featureIcon" />
                    </div>
                    <div className="containerVisiteButton">
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ width: '100%' }}
                            onClick={() => callbackIsDetail(item)}
                        >
                            Visiter
                        </Button>
                    </div>
                </div>
                <FaMapMarkerAlt
                    size="35"
                    color={color}
                    onClick={() => callbackIsOpen(text)}
                    cursor="pointer"
                />
            </div>
        );
    }
}

export default MarkerMap;