/**
 * Passport Middleware
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module Dependencies
 */
const passport = require('passport');

/**
 * Passport Configurations
 */
const LocalLogin = require('./strategies/LocalLogin');

/**
 * Passport Init
 */
passport.use('local-login', LocalLogin);

/**
 * Passport Serialization
 */
passport.serializeUser(function(user, done){
    done(null, {
        ...user,
        name: `${user.firstName} ${user.lastName}`
    });
});

/**
 * Passport Deserialization
 */
passport.deserializeUser(function(user, done){
    done(null, user);
});