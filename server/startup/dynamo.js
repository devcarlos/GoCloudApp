const mysql = require('mysql');
const logger = require('../utils/logger');
const config = require('../config');

const { MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE } = config;

var mysql_config = {
    host: MYSQL_HOST,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    connectionLimit: 15,
    queueLimit: 30
};

// console.log("mysql config => ", mysql_config);

let pool = mysql.createPool(mysql_config);
// console.log(pool);

var DB = (function () {
    function _query(query, params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                console.log("MySql getConnection error", err);
                logger.info("MySql getConnection error", err);
                callback(null, err);
                throw err;
            }

            connection.query(query, params, function (err, rows) {
                connection.release();
                if (!err) {
                    callback(rows);
                } else {
                    console.log("MySql query error", err);
                    logger.info("MySql query error", err);
                    callback(null, err);
                }
            });

            connection.on('error', function (err) {
                connection.release();
                console.log("MySql Error", err);
                logger.info("MySql Error", err);
                callback(null, err);
                throw err;
            });
        });
    };

    return {
        query: _query
    };
})();

module.exports = DB;