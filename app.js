var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/*', express.static(path.join(__dirname, '/public')));

module.exports = app;
