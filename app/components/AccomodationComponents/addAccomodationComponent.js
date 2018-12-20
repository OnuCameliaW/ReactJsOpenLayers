import React from 'react';
import { render } from 'react-dom';
import SideContextPanelComponent from '../SideContextPanelComponent';
export default class AddAccomodationComponent extends React.Component{
	constructor(props) {
    	super(props);
    	this.getBodyHtml = this.getBodyHtml.bind(this);
    }
    getBodyHtml(){
    	return <h1>Cami</h1>;
    }
 
 //  	addInteraction() {
	// 	var value = "Point";
	// 	draw = new Draw({
	// 		source: source,
	// 		type: typeSelect.value
	// 	});
	// }

	// add_marker(latitude, longitude) {
 //        var lonLat = new OpenLayers.LonLat(longitude, latitude)
 //            .transform(
 //                new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
 //                map.getProjectionObject() // to Spherical Mercator Projection
 //        );
 //        var point = new OpenLayers.Marker(lonLat);
 //        markers.addMarker(point);
 //        map.setCenter(lonLat, 8);
 //        console.log(latitude + ", " + longitude);
 //    }

	render(){
		return(
			<SideContextPanelComponent 
				header = { "Add Accomodation" }
				body = { this.getBodyHtml() }/>
		);
	}
}