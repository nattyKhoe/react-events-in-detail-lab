// Code CoordinatesButton Component Here
import React from 'react';

class CoordinateButton extends React.Component {

    render() {
        return (
        <button onClick={(e)=>this.props.onReceiveCoordinates([e.screenX, e.screenY])}></button>
        )
    }
}

export default CoordinateButton;