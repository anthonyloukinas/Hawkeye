/**
 * Applications Server Controller
 * Handles logic for all routes matching "/applications"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Handles logic for "/applications".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getIndex = (req, res) => {
    res.render('Index', { nav_dir: 'applications'});
};