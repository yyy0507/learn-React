import React from 'react';
import ReactDOM from 'react-dom';

import Note from './components/note.js';
import List from './components/list.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Note />
		<List />
	</div>,
	document.getElementById('root'));
registerServiceWorker();
