import React, { Component } from 'react';
import './css/Offers.css'

class Offers extends Component {
    render() {
        const { isVisible } = this.props;
        return (
            <div className="containerOffers" style={{ left: isVisible ? "400px" : "-400px" }}>

            </div>
        );
    }
}

export default Offers