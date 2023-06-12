const bcryptjs = require("bcryptjs")

module.exports = {
  hashPassword(password) {
    return bcryptjs.hashSync(password)
  },
  comparePassword(password, encryptedPass) {
    return bcryptjs.compareSync(password, encryptedPass)
  }
}