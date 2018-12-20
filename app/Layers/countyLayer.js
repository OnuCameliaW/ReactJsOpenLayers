import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import {Fill, Stroke, Style} from 'ol/style';

export default class CountyLayer {
	constructor(){}
    setSource() {
	    return new VectorSource({
	        url: 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/romania.geojson',
	        format: new GeoJSON()
	    });
    }

    setStyle(){
    	return new Style({
		    fill: new Fill({
		      color: 'red'
		    }),
		    stroke: new Stroke({
		      color: 'white'
		    })
		  })
    }

    setZIndex(){
    	//aici am pozitia
    }

    returnLayer(){
    	return new VectorLayer({
            source: this.setSource(),
            style: this.setStyle()
        });
    }
}