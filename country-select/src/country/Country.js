import React, { Component } from 'react'
import Map from '../map/Map'
import 'bootstrap/dist/css/bootstrap.min.css';

class Country extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryName: "Chennai",
      location: [
        { name: 'Chennai', lat: 13.0827, lng: 80.2707, timezone: 'Asia/Kolkata' },
        { name: 'Paris', lat: 48.8566, lng: 2.3522, timezone: 'Europe/Paris' },
        { name: 'London', lat: 51.5074, lng: 0.1278, timezone: 'Europe/London' },
        { name: 'Frankfurt', lat: 50.1109, lng: 8.6821, timezone: 'Europe/Berlin' }],
      center: { name: 'Chennai', lat: 13.0827, lng: 80.2707, timezone: 'Asia/Kolkata' },
    }

    let options = this.state.location.map(loc => <option key={loc.name}>{loc.name}</option>)

  }


  clickHandler = () => {
    let location = this.state.location
    let result = location.filter(loc => loc.name == this.state.countryName)
    let center = {
      lat: result[0].lat,
      lng: result[0].lng,
      timezone: result[0].timezone
    }

    this.setState({ center });
  }

  changeHandler = (e) => {
    this.setState({ countryName: e.target.value })
  }

  render() {

    return (
      <div>


        <div className="row justify-content-md-center mt-2">
          <div className="col-md-auto">
            <label className="form-label form-control-lg">Select Country to Locate </label>

          </div>
          <div className="col-lg-1">
            <select value={this.state.countryName} onChange={this.changeHandler} className="form-select form-control-lg" aria-label="Default select example" >

              {this.state.location.map((location) => <option key={location.name}>{location.name}</option>)}
            </select>

          </div>

          <div className="col-lg-1">
            <button onClick={this.clickHandler} className="btn btn-lg btn-primary" >ShowMap</button>

          </div>
        </div>


        <Map center={this.state.center} className="mt-1" />
      </div>
    )
  }

}

export default Country

