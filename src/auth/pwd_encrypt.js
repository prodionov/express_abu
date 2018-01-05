const bcrypt = require("bcryptjs");
const rounds = 10;

var gen_pwd = password => {
  return bcrypt.hash(password, rounds);
};

var auth_pwd = (password, hash) => {
  return bcrypt.compare(password, hash)
}

//salt('test').then(console.log('salt was generated'));

module.exports = {gen_pwd, auth_pwd};
