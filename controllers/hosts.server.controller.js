/**
 * Hosts Server Controller
 * Handles logic for all routes matching "/hosts"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Handles logic for "/hosts".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getIndex = (req, res) => {
  res.render('hosts/Index', { nav_dir: 'hosts'});
};

/**
 * Handles logic for "/hosts/create".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getCreate = (req, res) => {
  res.render('hosts/Create', { nav_dir: 'hosts'});
}

exports.postCreate = (req, res) => {
  console.log(req.body);
  
}