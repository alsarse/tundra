//Import node requeriments
var express = require ('express');
var ejs  = require('ejs');
var path = require('path'); 

var routes = require ('./backend/routing');

var app = express(); 

var render = ejs.renderFile;
app.engine('html', render);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public/src/assets')));
app.use('/', routes);

/*404 Handler error*/
app.use(function(req, res, next){
	var err= new Error('Not found');
	err.status = 404;
	next(err);
});

app.listen(3000);