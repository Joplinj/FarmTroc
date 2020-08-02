import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import GoogleMapReact from 'google-map-react';
import MarkerMap from './Components/MarkerMap';
import markers from './Components/data/markers.json';

class Details extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', top:'72px', left:'0', backgroundColor:'white', height: '100%', width: '400px', boxShadow: '1px 6px 12px 1px rgba(0,0,0,.2)' }}>
        <p>coucou</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerOpen: "",
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
                  lat={marker.lat}
                  lng={marker.lng}
                  text={marker.title}
                  color={marker.marker_Color}
                  bio={marker.bio}
                  vote={marker.vote}
                  layerOpen={this.state.layerOpen}
                  callbackIsOpen={this.doubleLayerKill}
                  key={key}
                />
              })
            }
          </GoogleMapReact>
        </div>
        <Details />
      </div>
    );
  }
}

export default App;
