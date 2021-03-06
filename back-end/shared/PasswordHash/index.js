const bcrypt = require("bcrypt");

module.exports = (saltRounds = 10) => ({
  createPasswordHash: password => {
    return bcrypt.hashSync(password, saltRounds);
  },
  comparePasswordHash: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  }
});
