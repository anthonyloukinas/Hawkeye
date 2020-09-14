/**
 * lib/DatabaseClient.js
 */

/**
 * Module Dependencies
 */
const mysql = require('mysql');


/**
 * DatabaseClient Class
 * 
 * This class is used to communicate with the backend MySQL Database Server.
 * In this class you can perform operations against the SQL Server in a 
 * defined standard way.
 * 
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 * @class
 */
class DatabaseClient {
  /**
   * DatabaseClient Init
   */
  constructor() {
    this.connection = this._createConnection();
  }

  /**
   * Debugging purposes only
   */
  test() {
    this._connect();

    this.connection.query("SELECT * FROM pet", function(error, results, fields) {
      if (error) throw error;
      console.log(results);
    });

    this._closeConnection();
  }
  
  /**
   * SQL Operation Functions
   */

  // Might be able to just use a general "query" function instead of having multiple funcs

  insert() {

  }

  delete() {

  }

  update() {

  }

  /**
   * Internal Class Use Functions Only
   */
  _createConnection() {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hawkeye'
    });
  }

  _connect() {
    this.connection.connect();
  }

  _closeConnection() {
    this.connection.end();
  }
}

module.exports = DatabaseClient;