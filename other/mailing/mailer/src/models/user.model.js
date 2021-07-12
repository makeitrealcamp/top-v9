const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  email: String,
  name: String,
  recoverToken: String,
  confirmed: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
})

const User = model('User', userSchema)

module.exports = User;
