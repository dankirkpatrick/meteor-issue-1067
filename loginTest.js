//TL = TLog.getLogger(TLog.LOGLEVEL_MAX, true);

if (Meteor.isClient) {
    Template.login.events({
        'click .submit': function(event) {
            var user = $('#username').val();
            var pw = $('#password').val();
            //TL.debug("logging in {" + user + "," + pw + "}");
            Meteor.loginWithPassword(user, pw, function(error) {
                if (error) {
                    //TL.debug("error: " + error.reason);
                }
            });
        },
        'click .create': function(event) {
            var user = $('#username').val();
            var pw = $('#password').val();
            var options = {'username':user,'password':pw};
            Accounts.createUser(options, function(error) {
                if (error) {
                    //TL.debug("error: " + error.reason);
                }
            });
            Meteor.loginWithPassword(user, pw, function(error) {
                if (error) {
                    //TL.debug("error: " + error.reason);
                }
            });
        }
    });

    Template.main.events({
        'click .logout': function(event) {
            Meteor.logout(function(error) {
                if (error) {
                    //TL.debug("error: " + error.reason);
                }
            });
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
