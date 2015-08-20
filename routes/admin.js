var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', {title:"Webcomic Admin"});
});

router.post('/add_comic', function(req, res, next) {
	console.log(req.body);
	res.render('admin', {title:"Comic Submitted"});
});

module.exports = router;