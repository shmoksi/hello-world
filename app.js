var http = require('http');
var express = require('express');
var path = require('path');

var fs = require('fs');

var app = express();

app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function(req, res, next) {
	fs.readFile('db/hello.txt', function(err, data){
		res.render('index', {
			text: data.toString()
		});
	});
});
