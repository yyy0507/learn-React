'use strict';

const EnvParam = require('./env_params');

require('./common');

setTimeout(function(){
	require.ensure([], function(require){
		require('./dialog');
	});
}, 3000)


console.log('index.js loaded', EnvParam);
