/**
 * Authentication Server Routes
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const passport = require('passport'),
    passportService = require('../lib/passport'),
    Authentication = require('../controllers/authentication.server.controller');

/**
 * Use Passport Authentication Strategies
 * @type {AuthenticateRet}
 */
const requireLogin = passport.authenticate(
    ['local-login'], {
        successRedirect: '/',
        failureRedirect: '/auth/login',
        failureFlash: true
    }
);

/**
 * Route Handling logic
 * @param app - Express Application
 */
module.exports = function(app){

    app.route('/auth/login')
        .get(Authentication.getLogin)
        .post(requireLogin, Authentication.postLogin);

    app.route('/auth/signup')
        .get(Authentication.getSignup)
        .post(Authentication.postSignup);

    app.route('/auth/logout')
        .get(Authentication.getLogout);

};