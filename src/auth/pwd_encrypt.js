const bcrypt = require('bcryptjs');

const rounds = 10;

// var gen_salt = (pwd) => new Promise( (resolve, reject) => {
//   bcrypt.genSalt(10, (err, salt) => {
//     console.log('salt:', salt);
//     if(err) {
//       reject(err);
//     }
//     else{
//       resolve(salt)
//     }
//   })
//   // console.log('hash', hash);
//   // if(hash) {
//   //   resolve(hash);
//   // }
// });

var gen_salt = () => {
    return bcrypt.genSalt(10);
}

//salt('test').then(console.log('salt was generated'));

module.exports = gen_salt;
