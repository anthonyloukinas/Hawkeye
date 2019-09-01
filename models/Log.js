/**
 * Log Database Model
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Log Schema
 */
let logSchema = new Schema({
    type: String,
    messageObj: Object,
    date: {
        type: Date,
        default: new Date()
    }
});

exports.Schema = logSchema;
module.exports = mongoose.model('Log', logSchema, 'logs');