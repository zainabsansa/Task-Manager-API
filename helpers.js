const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const saltRound = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRound);
  return hashedPassword;
}
module.exports = { hashPassword };


