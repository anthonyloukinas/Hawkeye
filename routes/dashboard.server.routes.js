/**
 * Dashboard Server Routes
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const Dashboard = require('../controllers/dashboard.server.controller');

/**
 * Route Handling logic
 * @param app - Express Application
 */
module.exports = function(app){

    app.route('/applications')
        .get(Dashboard.getIndex);

};