if(!UseMobile){

angular.module("web").run(function($window, $meteor, $rootScope, $location, $state) {
  $rootScope.$on("$stateNotFound", function(event, unfoundState, fromState, fromParams){ 
  
  });
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
  
  });
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
  
  });
});

angular.module("web").config(
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
		.state("web", {
			abstract: true,
			templateUrl: "client/web/app/web.ng.html"
		})
    .state("web.main", {
      url: "/",
      templateUrl: "client/web/app/main/main.ng.html",
      controller: "MainCtrl",
      resolve: {
        currentUser: waitForUser
      }
    });
    
  }
);

}
