'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new schema({
	username: {type: String, unique: true, lowercase:true},
	email: {type: String, unique: true, lowercase: true},
	password: String,
	role: {type: String, enum: ['superAdmin', 'admin', 'stakeHolder','dev']},
	project: [{
		project_id: Number,
	}]
})


userSchema.pre('save', function(next){
	let user = this

	console.log(user.password)

	if(!user.isModified('password')) return next()
	
	bcrypt.genSalt(10, (err, salt) =>{
		if(err)	return next(err)

		bcrypt.hash(user.password, salt, null, (err, hash)=>{
			if(err)	return next(err)

			user.password= hash
			next()
		})
	})
})

userSchema.methods.validate =  function (pass, cb){
	bcrypt.compare(pass, this.password, function (err, isMatch){
		if(err)
			return cb(err);
		cb(null, isMatch) 
	})
}

module.exports= mongoose.model('Usuarios', userSchema)

