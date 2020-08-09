import React, { Component } from 'react';
import './css/Map.css';
import Header from './Header';
import GoogleMapReact from 'google-map-react';
import MarkerMap from './MarkerMap';
import markers from './data/markers.json';
import Details from './Details'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerOpen: "",
      dataDetails: {
        title: "",
        bio: true,
        note: 0,
        vote: 0,
        offers: {}

      }
    }
  }

  static defaultProps = {
    center: {
      lat: 47.509787,
      lng: 2.556278
    },
    zoom: 6
  };

  // Fonction appelée en callback des markers display dans le render, au clique. 
  doubleLayerKill = (text) => {
    if (this.state.layerOpen === text) {
      this.setState({
        layerOpen: ""
      })
    }
    else {
      this.setState({
        layerOpen: text
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="mapContainer">
          <GoogleMapReact
            bootstrapURLKeys={{ key: ['AIzaSyBZw1ag6s0Smsc3kMs_Mb07M4nv2-8Pv7w'] }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            {
              markers.map((marker, key) => {
                return <MarkerMap
                  item={marker}
                  lat={marker.lat}
                  lng={marker.lng}
                  layerOpen={this.state.layerOpen}
                  callbackIsOpen={this.doubleLayerKill}
                  key={key}
                />
              })
            }
          </GoogleMapReact>
        </div>
        <Details
          isVisible={this.state.detailsOpen}
        />
      </div>
    );
  }
}

export default Map;
