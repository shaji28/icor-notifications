var express = require('express'),
    auth = require('basic-auth');

var app = express();

app.listen(3000, function(){
	console.log('Starting app on port 3000');
});

app.use('/', function(req, res, next){
	var credentials = auth(req);
	if (!credentials || credentials.name !== 'Shaji' || credentials.pass !== '123') {
	    res.statusCode = 401
	    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
	    res.end('Access denied');
	    console.log('Access denied');
	}

	else {
		console.log('login successful');
		next();
	}

})

app.get('/', function(req, res){
	var user = auth(req).name;
	res.send('Welcome to my app '+user);
});
