module.exports = {
	port:5000,
	routes:  [
		{
			path:"authenticate",
			port:"5001"
		},
		{
			path:"master",
			port:"5002"
		},

	]

}