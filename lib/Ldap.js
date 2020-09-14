/**
 * lib/Ldap.js
 */

/**
 * Module dependencies
 */

const ldap = require('ldapjs'),
    ssha = require('ssha'),
    chalk = require('chalk');


// This needs to be retrieved from mysql or mongodb.
const config = {
    ldap: {
        url: "localhost",
        dn: "root",
        password: "password"
    }
}

const { url, dn, password } = config.ldap;

/**
 * LdapClient Class
 * 
 * This class is used to communicate with LDAP and manipulate user accounts.
 * In this class you can create, delete, and update user accounts.
 *
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 * @class
 */

class LdapClient {
    /**
     * Class init
     */
    constructor(){
        this.client = ldap.createClient({
            url
        });

        this._bind(this.client); // Bind to LDAP server on init
    }
}

module.exports = LdapClient;
