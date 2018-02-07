import React from 'react'
import { withGoogleMap,GoogleMap, Marker } from "react-google-maps"

const Map = withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        center={{ lat: props.lat, lng:  props.lng  }}
    >
        <Marker position={{ lat: props.lat, lng:  props.lng  }} />
    </GoogleMap>
)

export default Map