import React, { Component } from 'react';
import './css/Offers.css'
import { FaLeaf, FaAngleDown } from "react-icons/fa";
import { Tooltip } from "@material-ui/core"

class Offers extends Component {
    render() {
        const { isVisible, offers, type } = this.props;
        const data = offers.filter((offer) => offer.type === type);
        return (
            <div className="containerOffers" style={{ left: isVisible ? "400px" : "-400px" }}>
                <div className="headerOffers">
                    {
                        type === "plate" ?
                            <div>
                                <h3>Plats préparés</h3>
                                <p>Ici, tout les plats préparés sont en bocal, et stérilisés. Un bocal stérilisé peut tenir des années.</p>
                            </div>
                            :
                            <h3>Récoltes</h3>
                    }
                </div>
                <div className="separatorLight"></div>
                {data.map(item => {
                    return (
                        <div className="offersItem">
                            <div className="offersItemLeft">
                                <div>
                                    <h4>{item.title}</h4>
                                    {item.vegan ? <Tooltip title="Plat Vegan" placement="top"><div className="veganIcon"><FaLeaf size="15" color="green" /></div></Tooltip> : ""}
                                    {item.vege ? <Tooltip title="Plat Végétarien" placement="top"><div className="veganIcon"><FaLeaf size="15" color="yellow" /></div></Tooltip> : ""}
                                </div>
                                <div className="offersItemQuantity">{item.quantity} {type === "plate" ? "Litres" : "Kg"}</div>
                            </div>
                            <div className="offersItemRight">
                                <div className="offersItemPickedDate">{type === "plate" ? "Fait le " : "Récolté le "} {item.picked_date}</div>
                            </div>
                            <div className="offersItemFooter">
                                <p>Détails</p><FaAngleDown size="16" color="#60a3bc" className="iconDown" />
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Offers