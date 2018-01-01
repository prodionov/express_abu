const connect = require("../db_connection");
const gen_salt = require("../../src/auth/pwd_encrypt");

console.log(gen_salt());

const add_user = async (data) => {
  await gen_salt()
    .then((salt) => {return connect.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
        [data.username, data.email, salt])
    })
    .catch(err => console.log('errorium', err.stack))
}

module.exports = add_user;
