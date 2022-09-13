var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  let user = req.user;
  res.render('index', { user });
});

module.exports = router;
