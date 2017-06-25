'use strict'

const Project = require('../model/proyectos')

function getProject(req,res){
	let projectId= req.params.projectId

	Project.findById(projectId, (err, project) =>{
		if(err)
			res.status(500).send({message: `Error interno del servidor: ${err}`})
		if(!project)
			res.status(404).send({message: 'El proyecto requerido no existe'})
		res.status(200).send({project}); 
	})
}

function getProjects(req, res){
	Project.find({},(err,products) => {
		if(err)
			return res.status(500).send({message: `Error interno del servidor: ${err}`})	
		if(!products)
			return res.status(404).send({message: 'No existen productos'})

		return res.status(200).send({products})	
	})
}

function createProject(req, res){

	let project = new Project()

	project.projectName = req.body.projectName
	project.desc = req.body.desc
	project.task = req.body.task
	project.team = req.body.team
	
	project.save((err, projectSaved)=>{
		if(err)
			return res.status(500).send({message: `Error interno del servidor: ${err}`})
		return res.status(200).send({project: projectSaved})
	})
}

function updateProject(req, res){
	let projectId= req.params.projectId
	let update= req.body

	Project.findByIdAndUpdate(projectId, update, (err, projectUpdated)=>{
		if(err)
			return res.status(500).send({message: `Error interno del servidor: ${err}`})

		return res.status(200).send({project: projectUpdated})
	})
}
function deleteProject(req, res){
	let productId = req.params.projectId

	Project.findById(productId, (err, project) => {
		
		if(err)
			return res.status(500).send({message: `Error interno del servidor: ${err}`})

		project.remove(err => {
			if(err)
				return res.status(500).send({message: `Error interno del servidor: ${err}`})
			return res.status(200).send({message: 'Proyecto eliminado'})
		})
	})
}

module.exports= {
	getProject,
	getProjects,
	createProject,
	updateProject,
	deleteProject
}