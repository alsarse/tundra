	(function(){
	'use strict';

	angular.module('Tundrapm.components.sidebar')
		.controller('sidebarCtrl', sidebarCtrl);

	function sidebarCtrl($scope, $location){

		$scope.menuP =['Overview', 'Backlog', 'Issues', 'Code', 'Documentation', 'Team' ]
		$scope.menuA =['About', 'Legacy', 'Suggest' , 'MVV']; 

		$scope.url= function(){
			var path = $location.path().split('/');
			var url ="#";

			for(var i=0; i < path.length-1; i++){
				url+= path[i]+"/";
			}
			
			return url; 
		}

		$scope.hash= $scope.url(); 

	}

	angular.module('ui.bootstrap').controller('CollapseDemoCtrl', function ($scope) {
  		$scope.isNavCollapsed = true;
  		$scope.isCollapsed = false;
  		$scope.isCollapsedHorizontal = false;
	});
		
})();