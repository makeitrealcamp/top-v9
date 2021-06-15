const { model, Schema, models } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator(email) {
        return models.User.findOne({ email })
          .then(user => !user)
          .catch(() => false)
      },
      message: 'El email ya está en uso'
    }
  },
  name: String,
  articles: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  }
}, {
  timestamps: true,
})

const User = model('User', userSchema)

module.exports = User;
