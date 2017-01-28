var express = require('express');
var router = express.Router();

/*GET Home Page*/
router.get('/', function(req, res){
	res.render('../public/src/index');
});

/*GET API client*/
router.get('/api',function(req, res){
	res.render('../backend/api/home');
});

module.exports = router; 