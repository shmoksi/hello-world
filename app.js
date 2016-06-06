var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// New Code
// var mongo = require('mongodb');
// var mongoose = require('mongoose');

// if(process.env.OPENSHIFT_MONGODB_DB_URL){
//   mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL + db_name);
// }

// mongoose.connect('mongodb://127.0.0.1:27017/' + db_name);

// var user = require('./models/users');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('connect to DB');
// });

var routes = require('./routes/index');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

server.listen(app.get('port'), app.get('ip'), function () {
  console.log( "Listening on " + app.get('ip') + ", server_port " + app.get('port') )
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

exports.user = user;
module.exports = app;
