(function(){
	'use strict';

	angular.module('Tundrapm.components', [
		'Tundrapm.components.navbar',
		'Tundrapm.components.footer',
		'Tundrapm.components.sidebar',
	])
	.directive('tpmNavbar', tpmNavbar)
	.directive('tpmFooter', tpmFooter)
	.directive('tpmSidebar', tpmSidebar);
	
	function tpmNavbar(){
		return{
			restrict: 'E',
			templateUrl: "app/components/templates/navbar/tpmNavbar.html",
			controller: 'navbarCtrl',
		}
	}
	function tpmFooter(){
		return{
			restrict: 'E',
			templateUrl: "app/components/templates/footer/tpmFooter.html",
			controller: 'footerCtrl',
		}
	}

	function tpmSidebar(){
		return{
			restrict: 'E',
			templateUrl: "app/components/templates/sidebar/tpmSidebar.html",
			controller: "sidebarCtrl",
		}
	}

})();