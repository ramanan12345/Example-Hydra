/*
 * Set to true to always develop in the browser. This is similar to the ionic mobile server and
 * it allows for faster mobile development without touching a simulator.
 *
 * Note: It will always be true on Cordova. Make sure to let Cordova decide in production.
 */

if(Meteor.settings && Meteor.settings.public){
	UseMobile = Meteor.isCordova || Meteor.settings.public.AlwaysMobile || false;
}else{
	UseMobile = Meteor.isCordova || false;
}

Template.indexBody.helpers({
	UseMobile: function(){
		return UseMobile;
	}		
});

angular.module('both',[
	'angular-meteor',
	'both.services'
]);

angular.module('both.services',[
	'angular-meteor'
]);

if(UseMobile){

	//Initialize the mobile modules
	angular.module('mobile',[
		'both',
		'mobile.services',
		'mobile.controllers',
		'mobile.directives',
		'mobile.filters',
		'angular-meteor',
		'ui.router',
		'ionic'
	]);
	angular.module('mobile.services',[
		'both',
		'angular-meteor',
		'ui.router',
		'ionic'
	]);
	angular.module('mobile.filters',[
		'both',
		'angular-meteor',
		'ui.router',
		'ionic',
		'mobile.services'
	]);
	angular.module('mobile.controllers',[
		'both',
		'angular-meteor',
		'ui.router',
		'ionic',
		'mobile.services',
		'mobile.filters'
	]);
	angular.module('mobile.directives',[
		'both',
		'angular-meteor',
		'ui.router',
		'ionic',
		'mobile.services',
		'mobile.filters',
		'mobile.controllers'
	]);

}else{

	//Initialize the web modules
	angular.module('web',[
		'both',
		'web.services',
		'web.controllers',
		'web.directives',
		'web.filters',
		'angular-meteor',
		'ui.router'
	]);
	angular.module('web.services',[
		'both',
		'angular-meteor',
		'ui.router'
	]);
	angular.module('web.filters',[
		'both',
		'angular-meteor',
		'ui.router',
		'web.services'
	]);
	angular.module('web.controllers',[
		'both',
		'angular-meteor',
		'ui.router',
		'web.services',
		'web.filters'
	]);
	angular.module('web.directives',[
		'both',
		'angular-meteor',
		'ui.router',
		'web.services',
		'web.filters',
		'web.controllers'
	]);

}

function onReady(){
  if(UseMobile){
		
		angular.bootstrap(document, ['mobile'], {
	  	strictDi: true
		});
	
	}else{
		
		angular.bootstrap(document, ['web'], {
	  	strictDi: true
		});
	
	}
}

if(UseMobile){

	if(Meteor.isCordova){
		angular.element(document).on("deviceready", onReady);
	}else{
		angular.element(document).ready(onReady);
	}

}else{
  
	angular.element(document).ready(onReady);

}
