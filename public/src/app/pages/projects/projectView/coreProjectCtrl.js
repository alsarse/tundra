(function(){
	'use strict';

	angular.module('Tundrapm.pages.projects')
		.controller('coreProjectCtrl', coreProjectCtrl);

	function coreProjectCtrl($scope, $location, $stateParams) {
		
		$scope.state = function(){
			var path = $location.path().split('/');
			return path[path.length-1]; 	
		}

	}
})();