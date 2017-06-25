(function (){
	'use strict';
	
	angular.module('Tundrapm.pages', [
		'ui.router',
		'ui.bootstrap',
		'LocalStorageModule',
		'toaster',
		'Tundrapm.pages.home',
		'Tundrapm.pages.dashboard',
		'Tundrapm.pages.projects',
		'Tundrapm.pages.about',
		'Tundrapm.pages.chat',
		'Tundrapm.pages.profile',
	])
		
		.config(routeConfig);


	/*--------
	ngInject 
	----------*/

	function routeConfig($urlRouterProvider){

		$urlRouterProvider.otherwise("/dashboard");
	}

})();