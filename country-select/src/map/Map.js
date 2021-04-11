import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TimeZoneComponent from './TimeZoneComponent';


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCm32WYPlxGl9yOZcT0cUQeR303aNgFcnM" }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <TimeZoneComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            time={this.props.center.timezone }
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;