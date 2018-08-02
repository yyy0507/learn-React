import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/searchTable.js';

import './style/main.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<div className="mp-title">
			<h2>公交线路查询</h2>
			<Search />
		</div>
	</div>,
	document.getElementById('root')
);

registerServiceWorker();

