if(!UseMobile){

angular.module('web.directives').directive("navbar",
 	function($meteor, $state){

 		function link(scope, element, attrs){
			
		}

		return {
    	restrict: 'E',
    	templateUrl: 'client/web/app/directives/navbar/navbar.ng.html',
    	controller: 'NavbarCtrl',
    	link: link,
    	scope: {
    		
    	}
  	};

});

}