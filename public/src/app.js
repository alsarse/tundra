(function(){
	
	'use strict';

	angular.module('Tundra', [])
	.controller('tundraTest', tundraTest);

	function tundraTest($scope){
		$scope.prueba ="Esto es una prueba"; 
	}
})();
