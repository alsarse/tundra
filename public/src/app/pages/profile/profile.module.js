(function(){

	'use strict';

	angular.module('Tundrapm.pages.profile',['ui.router'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
			$stateProvider
			.state("/profile", {
				url: '/profile',
				templateUrl: 'app/pages/profile/profile.html',
				controller: 'profileCtrl'
			});
	}
		
})();