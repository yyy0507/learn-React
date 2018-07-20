module.exports = function() {
	return {
		plugins: {
			autoprefixer: {
				browsers: [
					"ios >= 8.1",
					"android >= 4.4" 
				]
			}
		}
	}
}