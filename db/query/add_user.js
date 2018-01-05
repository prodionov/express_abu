const connect = require("../db_connection");
const { gen_pwd } = require("../../src/auth/pwd_encrypt");

q_check_username = "SELECT * FROM users WHERE username = $1";
q_check_email = "SELECT * FROM users WHERE email = $1";
q_insert = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";

const check = async data => {
  await Promise.all([
    connect.query(q_check_username, [data.username]),
    connect.query(q_check_email, [data.email])
  ])
    .then(results => {
      return new Promise((resolve, reject) => {
        if (results[0].rowCount > 0) {
          throw new Error("user with that name already exist");
        } else if (results[1].rowCount > 0) {
          throw new Error("user with that email already exist");
        } else {
          resolve(data);
        }
      });
    })
    .then(data => {
      return add_user(data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const add_user = async data => {
  await gen_pwd(data.password)
    .then(hash => {
      return connect.query(q_insert, [data.username, data.email, hash]);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

module.exports = { add_user, check };
