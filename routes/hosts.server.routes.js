/**
 * Hosts Server Routes
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const Hosts = require('../controllers/hosts.server.controller'),
    authUtil = require('../lib/utilities/authentication');

/**
 * Route Handling logic
 * @param app - Express Application
 */
module.exports = function(app){

    app.route('/hosts')
        .get(authUtil.isLoggedIn, Hosts.getIndex);

    app.route('/hosts/create')
        .get(authUtil.isLoggedIn, Hosts.getCreate);

};