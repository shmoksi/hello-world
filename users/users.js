var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res){
	db.users.find({}).limit(10).forEach(function(err, doc) {
	  if (err) throw err;
	  if (doc) { res.json({'users': doc}); }
	});
});
