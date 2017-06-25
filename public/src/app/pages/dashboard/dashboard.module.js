(function(){

	'use strict';

	angular.module('Tundrapm.pages.dashboard',['ui.router'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		$stateProvider
			.state("/dashboard", {
				url: '/dashboard',
				templateUrl: 'app/pages/dashboard/dashboard.html',
				controller: 'dashboardCtrl'
			});
	}
		
})();