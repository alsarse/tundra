'use strict'

const mongoose = require('mongoose')
const User = require('../model/usuarios')
const services =require('../services')
const bcrypt = require('bcrypt-nodejs')
const auth = require('../middleware/auth')

function signUp(req, res){
	const user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		role: req.body.role
	})

	user.save((err) => {
		if(err)
			return res.status(500).send({message: `Error al crear el usuario ${err}`})

		return res.status(200).send({message: 'Usuario registrado en el sistema', token: services.createToken(user)})
	})
}

function signIn(req, res){

	console.log(req.body)
	User.findOne({email:req.body.email}, (err, user)=>{
		
		if(err)
			return res.status(500).send({message: `Error interno del servidor ${err}`})
		if(!user)
			return res.status(404).send({message: 'Usuario no encontrado'})

		let validate = user.validate(req.body.password, (err, bool)=>{
			if (err)
				return res.status(500).send({message: `Error interno del servidor ${err}`})
		}).then((match)=>{
			if(!match)
				return res.status(403).send({message: 'Forbiden'})

			return res.status(200).send({message: 'Login correcto', token: services.createToken(user)})		
		})
	})						
}
function getUsername(req, res){
	auth
}
function getUsers(req, res){
	User.find({},(err,users) => {
		if(err)
			return res.status(500).send({message: `Error interno del servidor: ${err}`})	
		if(!users)
			return res.status(404).send({message: 'No existen productos'})

		return res.status(200).send({users})	
	})
}

function deleteUser(req, res){
	let userId= req.params.userId

	User.findById(userId, (err, user)=>{
		if(err)
			return res.status(500).send({message: `Error interno del servidor ${err}`})
		
		user.remove( err =>{
			if(err)
				return res.status(500).send({message: `Error interno del servidor ${err}`})		

			return res.status(200).send({message:'Usuario Eliminado'})
		})
	})
}

module.exports ={
	signIn,
	signUp,
	getUsers,
	deleteUser,
	getUsername

}