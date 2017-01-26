var express = require('express');
var router = express.Router();

/*GET Home Page*/
router.get('/', function(req, res){
	res.render('../static/src/index');
});
router.get('/home',function(req, res){
	res.render('../static/src/pages/home/home');
});

module.exports = router; 