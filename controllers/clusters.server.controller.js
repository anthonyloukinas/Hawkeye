/**
 * Clusters Server Controller
 * Handles logic for all routes matching "/clusters"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Handles logic for "/clusters".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getIndex = (req, res) => {
    res.render('Index', { nav_dir: 'clusters'});
};

/**
 * Renders create cluster page for "/clusters/create"
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getCreate = (req, res) => {
    res.render('clusters/Create', { nav_dir: 'clusters'});
};

/**
 * Handles form post logic for creating clusters
 * @param req - Express Request
 * @param res - Express Response
 */
exports.postCreate = (req, res) => {
    
};