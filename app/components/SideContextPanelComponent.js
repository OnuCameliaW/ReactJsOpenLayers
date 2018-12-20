import React from 'react';
import { render } from 'react-dom';

export default class SideContextPanelComponent extends React.Component{
	constructor(props) {
    	super(props);
    }
	render(){
		return(
			<div className = "contextPanel">
				<div className = "contextPanelHeader">
					{this.props.header}
				</div>
				<div className = "contextPanelBody">
					{this.props.body}
				</div>
			</div>
		);
	}
}