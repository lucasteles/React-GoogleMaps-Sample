import React from 'react'
import PlaceSearch from './PlaceSearch'
import Map from './Map'
import {getGeoLocation} from "../html5"
import AdressList from './AddressList'

export default class App extends React.Component
{
    constructor()
    {
        super()
        this.state = {address: "", lat: 0, lng: 0}
        this.setToCurrentLocation();
    }

    setToCurrentLocation = async () => {
        const location = await getGeoLocation();
        this.setState({
            lat : location.coords.latitude, 
            lng: location.coords.longitude
        })
    }

    onSelectPlace = (location) => {
        this.setState({...location});
    }
    
    render() {   
        const state = this.state;
        return (
            <div className="row app">
                <div className="col-sm-5">
                    <PlaceSearch onSelect={this.onSelectPlace}/>
                    <AdressList location={{...state}}  />
                </div>
                <div className="col-sm-7">
                    <Map 
                        lat={state.lat}
                        lng={state.lng}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        )
    }
}