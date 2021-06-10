const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  working: Boolean,
}, {
  timestamps: true,
})

const User = model('User', userSchema)

// User => users

module.exports = User
