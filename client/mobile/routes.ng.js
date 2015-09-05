if(UseMobile){

angular.module("mobile").run(function($window, $meteor, $rootScope, $location, $state) {
  $rootScope.$on("$stateNotFound", function(event, unfoundState, fromState, fromParams){ 
  
  });
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
  
  });
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
  
  });
});

angular.module("mobile").config(
  function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider){

    //$compileProvider.debugInfoEnabled(false);

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    //This is to clean the routes up a bit, this is commonly repeated code
    var waitForUser = function($meteor){
      return $meteor.waitForUser();
    };
    var requireUser = function($meteor){
      return $meteor.requireUser();
    };

    $stateProvider
		.state("mobile", {
			abstract: true,
			templateUrl: "client/mobile/mobile.ng.html"
		})
    .state("mobile.main", {
      url: "/",
      templateUrl: "client/mobile/app/main/main.ng.html",
      controller: "MainCtrl",
      resolve: {
        currentUser: waitForUser
      }
    });
    
  }
);

}
