/**
 * Authentication Server Controller
 * Handles logic for all routes matching "/auth"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Handles logic for "/auth/login".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getLogin = (req, res) => {
    res.render('authentication/Login', { page_name: 'login'});
};

exports.postLogin = (req, res) => {
    console.log(req.body);
    res.send("we gucc");
};

exports.getLogout = (req, res) => {
    req.logout();
    res.redirect('/auth/login');
};