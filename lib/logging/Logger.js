/**
 * lib/logging/Log.js
 */

 /**
  * Module dependencies
  */
const mongoose = require('mongoose'),
  log = require('../../models/Log'),
  logTypes = require('./logTypes');

/**
 * Logger Class
 * 
 * This class is used to logging app actions to database
 */
class Logger {
  /**
   * Class init
   */
  constructor() {
    this.mongoUrl = process.env.MONGO_URL || "mongodb://localhost/hawkeye";
    this._init();
  }

  log(type, messageObj) {
    let Log = this.conn.model('Log', log.schema); // models/Log.js
    let newLog = Log({
      type: type, 
      messageObj: messageObj,
      date: new Date()
    });
    
    newLog.save().catch(error => {
      console.error(error);
    });
  }
  
  // TODO need to test that this actually works. Wrote this at 1:30am :)
  getLogsByType(type) {
    return new Promise((resolve, reject) => {
      let Log = this.conn.model('Log', log.schema);

      Log
        .find({ type: type })
        .exec(function(err, docs){
          if (err) reject(err);
          let logsArr = [];
          docs.forEach(doc => {
            let nested = JSON.parse(JSON.stringify(doc));
            logsArr.push(nested);
          });
          resolve({
            logs: logsArr
          });
        });
    });
  }

  /**
   * Initializes a new connection object to MongoDB
   * @private
   */
  _init() {
    this.conn = mongoose.createConnection(this.mongoUrl);
  }
  
}

module.exports = Logger;