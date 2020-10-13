var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expres1s' });
});

router.get('/test', function(req, res, next) {
  res.send(false);
});

module.exports = router;
