(function(){
	'use strict';

	angular.module('Tundrapm.components.footer')
		.controller('footerCtrl', footerCtrl);

	function footerCtrl($scope){
		$scope.currentUser = 'John Doe';
	}

})();