var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 	var image = {
		id:4,
		name:'rough_day.jpeg',
		next:4,
	  	prev:3,
	  	alt: "Web Comic Alt Text"
	};
  res.render('index', { title: 'Webcomic Title', image:image });

});

/* GET first comic */
router.get('/:id(\\d+)', function(req, res, next) {
	var imgNames = ['sledding.jpg', 'duplicator.jpg', 'pictures.jpeg', 'calvin_and_hobbes_dancing.jpg', 'rough_day.jpeg'];
  var id = parseInt(req.params.id);

	var image = {
		id:id,
		name:imgNames[id],
		next:id + 1,
	  	prev:id - 1,
	  	alt:"Web Comic alt-text"
	};
  res.render('index', { title: 'Webcomic Home', image:image });
});

/* GET previous comic */
router.get('/previous', function(req, res, next) {
  res.render('index', { title: 'Webcomic Home', imgName:'duplicator.jpg'});
});

/* GET next comic */
router.get('/next', function(req, res, next) {
  res.render('index', { title: 'Webcomic Home', imgName:'pictures.jpeg'});
});


module.exports = router;
