require('dotenv').config();

const Sequelize = require("sequelize");
const SQLite = require('sqlite3')

// const sequelize = new Sequelize(
//     process.env.DB_DATABASE,
//     process.env.DB_USER,
//     process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     operatorsAliases: 0,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: process.env.DB_DATABASE, // or ':memory:'
    dialectOptions: {
        // Your sqlite3 options here
        // for instance, this is how you can configure the database opening mode:
        mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
    },
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

// db.admin = require("./admin.model.js")(sequelize, Sequelize);

db.companies = require("./companies.model.js")(sequelize, Sequelize);

module.exports = db;