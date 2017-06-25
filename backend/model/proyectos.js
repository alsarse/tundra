'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = schema({
	projectName: String,
	created: {type: Date, default: Date.now() },
	desc: String,
	tags: [ {tag: String} ],
	team: [{
		username: String,
		role: {type: String, enum: ['projectOwner','design','UX','frontEnd','backEnd','QA','stakeHolder']}
	}]
})

module.exports = mongoose.model('Project', projectSchema)






