var express = require('express');
var router = express.Router();

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('developer', {page:'Team', menuId:'team'});
});

module.exports = router;