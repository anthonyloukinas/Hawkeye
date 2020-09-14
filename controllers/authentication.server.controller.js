/**
 * Dependencies
 */
const bcrypt = require('bcrypt');

/**
 * Authentication Server Controller
 * Handles logic for all routes matching "/auth"
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

const Account = require("../models/Account");

/**
 * Handles logic for "/auth/login".
 * @param req - Express Request
 * @param res - Express Response
 */
exports.getLogin = (req, res) => {
    res.render('authentication/Login', { nav_dir: 'login'});
};

exports.postLogin = (req, res) => {
    console.log(req.body);
    res.send("we gucc");
};

exports.getSignup = (req, res) => {
    res.render('authentication/Signup', { nav_dir: 'signup'});
};

exports.postSignup = (req, res) => {
    const { username, password, confirmpassword } = req.body;

    // check passwords match
    // check email isnt taken


    if (password !== confirmpassword) {
        // passwords dont match send error
    } else {
        // passwords match

        // check if email is already registered
        Account.findOne({ uid: username })
            .then(user => {
                if (!user) {
                    // continue
                    console.info(`User signed up with the email ${username}`);

                    const hashedPassword = bcrypt.hashSync(password, 12);
                    const newAccount = new Account({
                        uid: username,
                        accounts: {
                            local: {
                                username,
                                password: hashedPassword
                            }
                        }
                    });

                    newAccount.save()
                        .then(user => {
                            console.log(user);
                            res.send(200);
                        })
                        .catch(error => {
                            console.error(error);
                            res.send(500);
                        });
                } else {
                    // we found a user
                    console.info(`User with the email ${username} already exists!`);
                    res.send(500);
                }
            })
            .catch(error => {
                console.log(error);
                res.send(500);
            })
    }

    // req.flash('signupMessage', 'test');
};

exports.getLogout = (req, res) => {
    req.logout();
    res.redirect('/auth/login');
};