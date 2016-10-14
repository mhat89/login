Template.navbar.events({
	"click .logout-btn": function(event){
		Meteor.logout(function(err){
			if(err){
				FlashMessages.sendError(err, reason);
			}else{
				FlashMessages.sendSuccess('You are now loges out');
				Router.go('/');
			}
		});
	}
});