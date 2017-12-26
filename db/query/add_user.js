const connect = require("../db_connection");

const add_user = async data => {
    await connect.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [data.username, data.email, data.password]
    );
};

module.exports = add_user;
