// import sequelize constructor from library
const Sequelize = require('sequelize');

// we dont need to save to a variable because all we need it to do is run when we use connection.js
require('dotenv').config();

// must be let since it will be changed
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to our database, pass in your MySQL information for username or password
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
};


module.exports = sequelize;