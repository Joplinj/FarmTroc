import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import GoogleMapReact from 'google-map-react';
import MarkerMap from './Components/MarkerMap';
import markers from './Components/data/markers.json';
import Details from './Components/Details'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerOpen: "",
      detailsOpen: false,
      dataDetails: {
        title:"",
        bio:true,
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

  toogleDetails = (item) => {
    if(this.state.detailsOpen) {
      this.setState({ 
        detailsOpen: false
      })
      setTimeout(() => { 
      this.setState({ 
        detailsOpen: true,
        dataDetails: item
      })
       }, 400);
    }
    else {
      this.setState({ 
        detailsOpen: true,
        dataDetails: item
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
                  text={marker.title}
                  color={marker.marker_Color}
                  bio={marker.bio}
                  vote={marker.vote}
                  offers={marker.offers}
                  layerOpen={this.state.layerOpen}
                  callbackIsOpen={this.doubleLayerKill}
                  callbackIsDetail={this.toogleDetails}
                  key={key}
                />
              })
            }
          </GoogleMapReact>
        </div>
        <Details 
          isVisible={this.state.detailsOpen}
          item={this.state.dataDetails}
        />
      </div>
    );
  }
}

export default App;
