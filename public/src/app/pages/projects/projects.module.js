(function(){

	'use strict';

	angular.module('Tundrapm.pages.projects',['ui.router', 'ui.bootstrap', 'Tundrapm.components.sidebar'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		var route = 'app/pages/projects/projectView/projectView.html';
		
		$stateProvider
			.state("/projects", {
				url: '/projects',
				templateUrl: 'app/pages/projects/projects.html',
				controller: 'projectsCtrl',
			})
			.state('/projects.overview', {
			    url: '/{projectName:[^/]*}/overview',
				templateUrl: route,
				controller: 'coreProjectCtrl',
			})
			.state('/projects.backlog', {
				url: '/{projectName:[^/]*}/backlog',
				templateUrl: route,
				controller: 'coreProjectCtrl',
			})
			.state('/projects.issues', {
				url: '/{projectName:[^/]*}/issues',
				templateUrl: route,
				controller: 'coreProjectCtrl'
			})
			.state('/projects.code', {
				url: '/{projectName:[^/]*}/code',
				templateUrl: route,
				controller: 'coreProjectCtrl'
			})
			.state('/projects.documentation', {
				url: '/{projectName:[^/]*}/documentation',
				templateUrl: route,
				controller: 'coreProjectCtrl',
			})
			.state('/projects.team', {
				url: '/{projectName:[^/]*}/team',
				templateUrl: route,
				controller: 'coreProjectCtrl',
			});
	}
		
})();