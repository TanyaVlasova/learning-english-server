const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "4003563",
  host: "89.111.173.123",
  port: 5432,
  database: "learning_english",
});

module.exports = pool;
