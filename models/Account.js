/**
 * Account Database Model
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema;

/**
 * Account Schema
 * @type {mongoose.Schema}
 */
let accountSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    accounts: {
        local: {
            username: {
                type: String,
                required: false
            },
            password: {
                type: String,
                required: false
            }
        },
        // we need to think more about this SSO piece.
        ldap: {
            uid: String
        }
    }
});

accountSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.accounts.local.password);
};

accountSchema.virtual("password").set(function(value) {
    this.accounts.local.password = bcrypt.hashSync(value, 12);
});

accountSchema.virtual("name")
    .get(function(){
        return `${this.firstName} ${this.lastName}`;
    })
    .set(function(v){
        this.name = `${this.firstName} ${this.lastName}`;
    });

exports.Schema = accountSchema; // will use this in the future
module.exports = mongoose.model('Account', accountSchema, 'accounts');