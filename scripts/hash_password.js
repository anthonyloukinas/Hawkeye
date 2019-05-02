const bcrypt = require('bcrypt');

const plainPassword = 'Nothing01!';

let hashedPassword = bcrypt.hashSync(plainPassword, 8);

console.log(hashedPassword);