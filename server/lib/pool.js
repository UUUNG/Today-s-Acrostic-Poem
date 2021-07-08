const mysql = require("mysql2/promise")
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "project1",
  timezone: "+09:00"
});

module.exports = pool;