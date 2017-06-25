	(function(){
	'use strict';

	angular.module('Tundrapm.components.navbar')
		.controller('navbarCtrl', navbarCtrl);

	function navbarCtrl($scope, $rootScope, $uibModal, $location, $http){
			
    	$(document.getElementsByClassName("navbar-toggle")[0]).click(function(){
    	$(document.getElementsByClassName("navbar-nav")[1]).toggle(500);
    	$(document.getElementsByClassName("navbar-nav")[2]).toggle(500);
		});

		if (innerWidth <= 767) {
			$(document.getElementsByClassName("navbar-nav")[1]).hide();
    		$(document.getElementsByClassName("navbar-nav")[2]).hide();
    		$(document.getElementsByClassName("navbar-nav")[2]).removeClass("navbar-right");
		};

		window.addEventListener("resize", function() {
    		if (innerWidth > 767) {
				$(document.getElementsByClassName("navbar-nav")[1]).show();
    			$(document.getElementsByClassName("navbar-nav")[2]).show();
    			$(document.getElementsByClassName("navbar-nav")[2]).addClass("navbar-right");
			};
			if (innerWidth <= 767) {
				$(document.getElementsByClassName("navbar-nav")[1]).hide();
    			$(document.getElementsByClassName("navbar-nav")[2]).hide();
    			$(document.getElementsByClassName("navbar-nav")[2]).removeClass("navbar-right");
			};
		});

   

    $scope.getUsername = function(){
      var myHeaders = new Headers();
      myHeaders.append('authorization', `Bearer ${localStorage.token}`);
      console.log('Headers establecidas');
      $http.get('/api/auth')
        .success(function (response){
          console.log(response); 
        })
    }
    $scope.validateLogin = function(){
      console.log('...logueando');
      var formLogin = document.querySelector('#loginForm');

      var formData ={
        email: formLogin.email_create.value,
        password: formLogin.passwd.value
      }
      
      $http.post('/api/signin', formData)
        .success(function(response){
          console.log(response)
          localStorage.setItem('token', response.token);
          $scope.getUsername(); 
        })

 }
    

    //Modal de Login
    $scope.open = function () {
        $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'app/pages/home/modalLogin.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'navbarCtrl',
          size: 'lg',   
          resolve: {
            items: function () {
              return $scope;
            }
          }
        }).rendered.then(function(){
          $location.path("/home"); 
        })
      }

    $scope.availableLogin= function(){
      if($location.path().split('/')[1]=="home"){
          $scope.open();
      }else{
          $location.path("/profile");
      }
    }
	}
})();