import React from 'react';
import ReactDOM from 'react-dom';

import LikeButton from './components/click.js';
import Tab from "./components/tab.js";

import registerServiceWorker from './registerServiceWorker';


import './style/style.css';
ReactDOM.render(
	<div>
		<Tab />
		<LikeButton />
	</div>, 
	document.getElementById('root')
);
registerServiceWorker();
