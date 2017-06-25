(function(){
	'use strict';

	angular.module('Tundrapm.pages.profile')
		.controller('profileCtrl', profileCtrl)
		.controller('profileCtrl2', profileCtrl2);

	function profileCtrl($scope) {
		$scope.page="profile";

	}

	function profileCtrl2($scope, $location){

		$scope.estado = function(){
			var path = $location.path().split('/');
			return path[path.length-1]; 	
		}

		$scope.test= 'Hola mundo'; 
		console.log($scope.estado());
	}
})();