(function(){

	'use strict';

	angular.module('Tundrapm.pages.chat',['ui.router'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
			$stateProvider
			.state("/chat", {
				url: '/chat',
				templateUrl: 'app/pages/chat/chat.html',
				controller: 'chatCtrl'
			});
	}	
		
})();