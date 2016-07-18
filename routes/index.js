var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var title = new Schema({
    title: {type: String}
});

modelTitle = mongoose.model('Title', title);

/* GET home page. */
router.get('/', function(req, res, next) {
    var newTitle = new modelTitle();
    newTitle.title = 'Oksi';

    newTitle.save(function (err, user) {
        if (err) {
            return console.log(err);
        }
        res.render('index', { title: user.title });

    });
});

module.exports = router;
