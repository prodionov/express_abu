const bcrypt = require('bcryptjs');

const rounds = 10;

var gen_pwd = (password) => {
    return bcrypt.hash(password, 10);
}

//salt('test').then(console.log('salt was generated'));

module.exports = gen_pwd;
