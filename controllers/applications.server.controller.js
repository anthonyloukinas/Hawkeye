/**
 * Applications Server Controller
 * Handles logic for all routes matching "/applications"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Handles logic for "/clusters".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getIndex = (req, res) => {
    res.render('Index', { page_name: 'applications'});
};