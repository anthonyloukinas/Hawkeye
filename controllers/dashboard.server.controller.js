/**
 * Dashboard Server Controller
 * Handles logic for all routes matching "/dashboard"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Handles logic for "/dashboard/status".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getIndex = (req, res) => {

    res.render('Index', { nav_dir: 'dashboard'});

};