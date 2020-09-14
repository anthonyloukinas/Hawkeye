/**
 * Local Login Strategy
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module Dependencies
 */
const LocalStrategy = require('passport-local').Strategy,
    Account = require('../../models/Account'),
    logger = require('../logging/Logger'),
    logTypes = require('../logging/logTypes'),
    log = new logger;

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
                    log.log(logTypes.AUTH, {
                        user: email,
                        action: "login",
                        status: "failure"
                    });
                    console.info(`[auth] ${email} failed login. Incorrect password`);
                    done(null, false, { message: "Invalid username/password" });
                } else {
                    log.log(logTypes.AUTH, {
                        user: email,
                        action: "login",
                        status: "success"
                    });
                    console.info(`[auth] ${email} logged in.`);
                    done(null, user['_doc']);
                }
            })
            .catch(error => done(error));
    });
});

module.exports = localLogin;