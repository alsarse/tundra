(function(){

	'use strict';

	angular.module('Tundrapm.pages.home',[
		'ui.router',
		'ui.bootstrap'
	])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		$stateProvider
			.state("/home", {
				url: '/home',
				templateUrl: 'app/pages/home/home.html',
				controller: 'homeCtrl'
			});
	}
		
})();