const mysql = require('mysql2');

const pool = mysql.createPool({//to create multiple connections for all the queries
    host: 'localhost',//runnin server IP address
    user: 'root',//give this under the configuration process
    database: 'node-complete',
    password: 'Garfie@123'//password used that under the installation
});

module.exports = pool.promise();//promises handle asynchronous tasks and asynchronous data that allows to code in a bit more structured way