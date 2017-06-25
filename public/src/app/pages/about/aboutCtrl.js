(function(){
	'use strict';

	angular.module('Tundrapm.pages.about')
		.controller('aboutCtrl', aboutCtrl)
		.controller('aboutCtrl2', aboutCtrl2);

	function aboutCtrl($scope) {
		$scope.page="about";

	}

	function aboutCtrl2($scope, $location){

		$scope.estado = function(){
			var path = $location.path().split('/');
			return path[path.length-1]; 	
		}

		$scope.test= 'Hola mundo'; 
		console.log($scope.estado());
	}
})();