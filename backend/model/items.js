'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const itemSchema = new schema({
	project_id: Number,
	itemType: {type: String, enum: ['task','bug','suggest','sprint','doc',]},
	stateFrom: {type: String, enum: ['new','assigned','inProgress','readyToTest']},
	stateTo: {type: String, enum: ['assignes','inProgress','readyToTest','closed']},
	desc: String, 
	date: {type: Date, default: Date.now()},
	createdBy: Number,
	assignedTo: [{
		user_id: Number, 
	}]
})

module.export(itemSchema)