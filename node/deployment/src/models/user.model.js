const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: String
}, {
  timestamps: true,
})

const User = model('User', userSchema)

module.exports = User;
