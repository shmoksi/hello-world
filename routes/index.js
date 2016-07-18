var express = require('express');
var router = express.Router();
var titlesCollection = require('./controller');


/* GET home page. */
router.get('/', function(req, res, next) {
    var newTitle = new titlesCollection();
    newTitle.title = 'Oksi';

    titlesCollection.createTitle(newTitle, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.render('index', { title: user.title });
        }
    });
});

module.exports = router;
