/**
 * Clusters Server Routes
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const Clusters = require('../controllers/clusters.server.controller');

/**
 * Route Handling logic
 * @param app - Express Application
 */
module.exports = function(app){

    app.route('/clusters')
        .get(Clusters.getIndex);

    app.route('/clusters/create')
        .get(Clusters.getCreate)
        .post(Clusters.postCreate);

};