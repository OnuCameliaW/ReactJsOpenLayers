import React from 'react';
import { render } from 'react-dom';
import CountyLayer from './Layers/countyLayer';
import AddAccomodationComponent from './components/AccomodationComponents/AddAccomodationComponent';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import Draw from 'ol/interaction/Draw';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var countyLayer = new CountyLayer();
        var map = new Map({
            target: this.refs.mapContainer,
            layers: [countyLayer.returnLayer()],
            view: new View({
                center: fromLonLat([24.9668, 45.9432]),
                zoom: 7
            })
        });
    }

    render() {
        return (
            <div>
	            <div id="mapContainer" ref="mapContainer"> </div>
	            <AddAccomodationComponent />
	        </div>
        );
    }
}