'use strict'

const express = require('express')
const api = express.Router()
const projectsCtrl = require('./controller/projecto')
const userCtrl = require('./controller/user')
const auth = require('./middleware/auth')

/*GET Home Page*/
api.get('/', (req, res) => {
	res.render('../public/src/index')
});

/*GET API client*/
api.get('/api', auth ,(req, res) => {
	res.render('../backend/api/home')
});
//PROYECTOS
api.get('/api/projects', projectsCtrl.getProjects)
api.get('/api/projects/:projectId', projectsCtrl.getProject)
api.post('/api/projects', projectsCtrl.createProject)
api.put('/api/projects/:projectId', projectsCtrl.updateProject)
api.delete('/api/projects/:projectId', projectsCtrl.deleteProject)
//USUARIOS
api.get('/api/usuarios', userCtrl.getUsers)
api.get('/api/auth', userCtrl.getUsername)
api.post('/api/signin', userCtrl.signIn)
api.post('/api/signup', userCtrl.signUp)
api.delete('/api/usuarios/:userId', userCtrl.deleteUser)

module.exports = api