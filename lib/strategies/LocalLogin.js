/**
 * Local Login Strategy
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module Dependencies
 */
const LocalStrategy = require('passport-local').Strategy,
    Account = require('../../models/Account');

/**
 * Local Login Strategy Logic
 */
const localLogin = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    process.nextTick(function(){
        Account.findOne({ uid: email })
            .then(user => {
                if (!user || !user.validPassword(password)) {
                    console.log("wrong password");
                    console.log(password);
                    done(null, false, { message: "Invalid username/password" });
                } else {
                    console.log("user logged in");
                    done(null, user);
                }
            })
            .catch(error => done(error));
    });
});

module.exports = localLogin;