import React, { Component } from 'react';
import './css/Offers.css'
import { FaLeaf, FaAngleDown } from "react-icons/fa";
import { Tooltip } from "@material-ui/core"

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailsOfferOpen: 0
        }
    }

    toogleOfferDetail = (id) => {
        if (this.state.isDetailsOfferOpen === id) {
            this.setState({
                isDetailsOfferOpen: 0
            })
        }
        else {
            this.setState({
                isDetailsOfferOpen: id
            })
        }
    }

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
                        <div onClick={() => this.toogleOfferDetail(item.id)} className="containerOffersItem">
                            <div className="offersItem">
                                <div className="offersItemLeft">
                                    <div>
                                        <h4>{item.title}</h4>
                                        {item.plate_type === "Vegan" ? <Tooltip title="Plat Vegan" placement="top"><div className="veganIcon"><FaLeaf size="15" color="green" /></div></Tooltip> : ""}
                                        {item.plate_type === "Végétarien" ? <Tooltip title="Plat Végétarien" placement="top"><div className="veganIcon"><FaLeaf size="15" color="yellow" /></div></Tooltip> : ""}
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
                            <div className="offersItemDetails" style={{ height: this.state.isDetailsOfferOpen === item.id ? "130px" : "0px" }} >
                                {
                                    type === "plate" ?
                                        (
                                            <div>
                                                <div className="offersItemDetailsSection">
                                                    <label>Type de plat :</label><span> {item.plate_type}</span>
                                                </div>
                                                <div className="offersItemDetailsSection">
                                                    <label>Ingrédients du jardin :</label><span> {item.gardenIngredients ? "Oui" : "Non"}</span>
                                                </div>
                                                <div className="offersItemDetailsSection">
                                                    <label>Ingrédients :</label>
                                                    {item.ingredients.map(ingr => {
                                                        return <span> {ingr}, </span>
                                                    })}
                                                </div>
                                            </div>
                                        )
                                        :
                                        ""
                                }
                                {
                                    type === "gather" ?
                                        (
                                            <div>
                                                <div className="offersItemDetailsSection">
                                                    <label>Variété : </label><span> {item.variety}</span>
                                                </div>
                                                <div className="offersItemDetailsSection">
                                                    <label>Bio : </label><span> {item.bio ? "Oui" : "Non"}</span>
                                                </div>
                                            </div>
                                        )
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Offers