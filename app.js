var express = require('express');
var path = require('path');
var http = require('http');
// var users = require('./users/users');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

var connection_string = '127.0.0.1:27017/angularnode';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}

var mongojs = require('mongojs');
var db = mongojs(connection_string, ['users']);
var users = db.collection('users');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// app.use('/users', users);
app.get('/users', function(req, res){
	db.users.find({}, function(err, users) {
	  if (err) throw err;
	  if (users) { res.json({'users': users}); }
	});
});
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/*', express.static(path.join(__dirname, '/public')));

module.exports = app;
