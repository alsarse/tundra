(function(){

	'use strict';

	angular.module('Tundrapm.pages.about',['ui.router', 'Tundrapm.components.sidebar'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		var route = 'app/pages/about/about.html';

		$stateProvider
			.state("/about", {
				template: '<ui-view/>',
				abstract: true, 
			})
			.state("/about.about", {
				url: '/about/about',
				templateUrl: route,
				controller: 'aboutCtrl2',
			})
			.state("/about.legacy", {
				url:'/about/legacy',
				templateUrl: route,
				controller: 'aboutCtrl2',
			})
			.state('/about.mvv', {
				url: '/about/mvv', 
				templateUrl: route,
				controller: 'aboutCtrl2',
			})
			.state('/about.suggest', {
				url: '/about/suggest',
				templateUrl: route,
				controller: 'aboutCtrl2',
			});
	}
		
})();