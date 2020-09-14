/**
 * Host Database Model
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Module dependencies
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Host Schema
 */
let hostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  primaryAddress: {
    type: String,
    required: true
  },
  apiPort: {
    type: String,
    required: true
  },
  metadata: {
    datacenter: {
      type: String,
      required: false
    }
  }
});

module.exports = mongoose.model('Host', hostSchema, 'hosts');