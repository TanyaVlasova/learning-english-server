const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "4003563",
  host: "79.174.93.38",
  port: 5432,
  database: "learning_english",
});

module.exports = pool;
