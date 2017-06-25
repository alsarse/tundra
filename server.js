//Import node requeriments

const app= require('./backend/app')
const mongoose = require('mongoose')
const config = require('./config')



mongoose.connect(config.db, (err, res) =>{
	if(err) throw err;
	console.log('Conexion establecida con mongodb');
	app.listen(config.port);
});
