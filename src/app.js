const express = require('express');


const app = express();


app.get('/api', function (req, res) {
	res.json({
		hostname: require('os').hostname(),
		message: 'Hello medium readers!',
	});
});


module.exports = app;
