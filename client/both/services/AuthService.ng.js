angular.module('both.services').factory("AuthService",
  function($meteor){

  	var logout = function(success,error){
  		$meteor.logout()
			.then(function(){
				if(success){
					success();
				}
			},function(err){
				if(error){
					error(err);
				}
			});
  	};

    var logoutAll = function(success,error){
      $meteor.logoutOtherClients()
			.then(function(){
				if(success){
					success();
				}
			},function(err){
				if(error){
					error(err);
				}
			});
    };

		//user.email
  	var login = function(success,error,user,password){
  		$meteor.loginWithPassword(user,password)
			.then(function(){
				if(success){
					success();
				}
			},function(err){
				if(error){
					error(err);
				}
			});
  	};

		//user.email
		//user.password
		//user.username
		//user.profile
  	var register = function(success,error,user){
      $meteor.createUser(user)
      .then(function(){
				if(success){	
					success();
				}
			},function(err){
				if(error){
					error(err);
				}
			});
		};

    var changePassword = function(success,error,oldPassword,currentPassword){
      $meteor.changePassword(oldPassword, currentPassword)
      .then(function(){
				if(success){
					success();
				}
			},function(err){
				if(error){
					error(err);
				}
			});
		};

		//obj.email
    var forgotPassword = function(success,error,obj){
      $meteor.forgotPassword(obj)
			.then(function(){
				if(success){
					success();
				}
			},function(err){
				if(error){
					error(err);
				}
			});
		};

    var resetPassword = function(success,error,token,password){
      $meteor.resetPassword(token,password)
			.then(function(){
				if(success){	
					sucess();
				}
			},function(err){
				if(error){	
					error(err);
				}
			});
		};

  	return {
  		logout: function(success,error){
  			logout(success,error);
  		},
      logoutAll: function(success,error){
        logoutAll(success,error);
      },
  		login: function(success,error,user){
  			login(success,error,user);
  		},
  		register: function(success,error,user){
  			register(success,error,user);
  		},
      changePassword: function(success,error,oldPassword,currentPassword){
        changePassword(success,error,oldPassword,currentPassword);
      },
      forgotPassword: function(success,error,obj){
        forgotPassword(success,error,obj);
      },
      resetPassword: function(success,error,token,password){
        resetPassword(success,error,token,password);
      }
  	};
});
