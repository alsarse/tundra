(function(){
	'use strict';

	angular.module('Tundrapm.pages.home')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl($scope, $rootScope) {

	}

	angular.module('ui.bootstrap').controller('CarouselDemoCtrl', function ($scope) {
  		$scope.myInterval = 5000;
  		$scope.noWrapSlides = false;
  		$scope.active = 0;
  		var slides = $scope.slides = [];
  		var currIndex = 0;
		
  		$scope.addSlide = function() {
  		  var newWidth = slides.length + 1;
  		  slides.push({
  		    image: 'img/' + newWidth + '.jpg',
  		    text: ['Imagen Koala','Imagen Faro','Imagen Pingüinos','Imagen Flores'][slides.length % 4],
  		    id: currIndex++
  		  });
  		};
		
  		for (var i = 0; i < 4; i++) {
  		  $scope.addSlide();
  		}
		
	});

})();