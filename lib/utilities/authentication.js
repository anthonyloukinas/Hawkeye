/**
 * lib/utilities/authentication.js
 * 
 * Helper functions related to Authentication
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Checks req.user is authenticated to access resource.
 * @param req - Express Request
 * @param res - Express Response
 * @param next - Express Next Middleware
 * @returns {*}
 */
exports.isLoggedIn = (req, res, next) => {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login page
    req.flash('danger', 'You need to be logged in to do that.');
    res.redirect('/auth/login');
};