const connect = require("../db_connection");
const { auth_pwd } = require("../../src/auth/pwd_encrypt");

q_find_user = "SELECT * FROM users WHERE username = $1";

const find_user = async data => {
  return connect.query(q_find_user, [data.username])
    .then(results => {
      return new Promise((resolve, reject) => {
        if (results.rowCount > 0) {
          let hash = results.rows[0].password;
          resolve([data.password, hash]);
        } else {
          return reject("there is no such user");
        }
      });
    })
    .then(([password, hash]) => {
      return auth_pwd(password, hash);
    })
    .then(result => {
      if(result) {
        console.log("password is correct");
        //user should be redirected to the main page
        //with the right cookies
        //log in button should show username and work as a  log out
      }
      else {
        console.log('wrong password');
        //client should stay on login page
        //the password field should be highlighted red
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const pwd_auth = async data => {
  await find_user(data).catch(err => {
    console.log(err);
  });
  //.then(auth_pwd(data))
};

module.exports = pwd_auth;
