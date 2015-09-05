Meteor.startup(function () {
  if(Users.find().count() === 0){
    //Do some seeding
    //var json = getJSON("seeds/users.json");
		//user_id = Accounts.createUser(json[0]);
	}
});
