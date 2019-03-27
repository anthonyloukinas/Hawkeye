/**
 * Applications Server Routes
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const Applications = require('../controllers/applications.server.controller');

/**
 * Route Handling logic
 * @param app - Express Application
 */
module.exports = function(app){

    app.route('/applications')
        .get(Applications.getIndex);
    
};