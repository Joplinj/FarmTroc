import React from 'react';
import { FaMapMarkerAlt, FaGlobeEurope, FaTree, FaStar, FaRegStar } from "react-icons/fa";
import './css/MarkerMap.css'
import { Button } from '@material-ui/core';
import { openDetails } from '../Redux/actions/index'
import { useDispatch } from 'react-redux'


const buildStars = (note) =>{
    let stars = [];
    for (var i = 0; i < note; i += 1) {
        stars[i] = <FaStar size="15" color="yellow" className="starIcon" />
    }
    while(stars.length < 5) {
        stars.push(<FaRegStar size="15" color="yellow" className="starIcon" />)
    }
    return stars
} 

function MarkerMap({item, layerOpen, callbackIsOpen}) {
    const dispatch = useDispatch();
    const { title, marker_Color, bio, note, vote} = item;
    
    return (
        <div className="markerMap">
            <div style={{ display: layerOpen === title ? "block" : "none" }} className="layer">
                <h2>
                    {title}
                </h2>
                <div className="containerStarIcon">
                    {buildStars(note)}
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
                        onClick={() => dispatch(openDetails(item))}
                    >
                        Visiter
                        </Button>
                </div>
            </div>
            <FaMapMarkerAlt
                size="35"
                color={marker_Color}
                onClick={() => callbackIsOpen(title)}
                cursor="pointer"
            />
        </div>
    );
}

export default MarkerMap;