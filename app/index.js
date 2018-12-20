import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import AddAccomodationComponent from './components/AccomodationComponents/AddAccomodationComponent';
import './style.scss'

render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/addAccomodation" component={AddAccomodationComponent} />
	</Router>
  ), document.getElementById('app'));

