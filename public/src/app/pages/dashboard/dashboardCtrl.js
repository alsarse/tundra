(function(){
	'use strict';

	angular.module('Tundrapm.pages.dashboard')
		.controller('dashboardCtrl', dashboardCtrl);

	function dashboardCtrl($scope, $location) {
		
		$scope.redirect = function(){
			return true; 
			/*if(!localStorage.getItem('token')){
				$location.path('/home')
				return true;
			}
			return false; */
		}
		$scope.page="Dashboard";

		/* OBJECT: Item
			Type: Task-Issue-Bug-Doc-Sprint
			Desc: Nombre descriptivo del Item.
			To: Destinatario del Item (si lo tuviera)/Nuevo estado;
			From: Estado final.
		*/

		//NOVEDADES: Asignaciones, grupos, tareas creadas, etc
		$scope.news=[
		{
		project: 'Proyecto Alfa', 
		verb: 'change' , 
		item:{
			type: 'task', 
			desc:'Create Loggin', 
			to: 'Ready to test', 
			from: 'In progress'
		}, 
		who: 'Peter Clark'
		},{
		project: 'Proyecto Alfa', 
		verb: 'add' , 
		item:{
			type: 'task' , 
			desc: 'Test Loggin' 
		}, 
		who: 'Peter Clark'
		},{
		project: 'Proyecto Alfa', 
		verb: 'assign' , 
		item:{
			type: 'task', 
			desc: 'Test Loggin', 
			to: 'John Doe'
		}, 
		who: 'Peter Clark'
		}	
		];

		//NOTIFICACIONES: Visitas a proyectos, mensajes, etc. 
		$scope.notifications= [
		{
		user: 'Helen Doe',
		action: 'visited',
		content: 'Project Alfa'
		},
		{
		user: 'Helen Doe',
		action: 'sent a',
		content: 'message',
		body: 'Hi Joe, i will be glad...' 
		}
		]
		
	}

})();