const { model, Schema, models } = require('mongoose')

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    // minlength: [5, 'El nombre es muy corto, al menos 5'],
    // maxlength: [8, 'El nombre es demasiado largo'],
    enum: {
      values: ['maria', 'juan', 'ana'],
      message: 'Tienes un nombre feo'
    }
  },
  email: {
    type: String,
    required: [true, 'El campo email es requerido'],
    match: [emailRegex, 'Email invalido'],
    validate: [
      {
        validator(email) {
          return models.User.findOne({ email })
            .then(user => {
              // null -> falsy
              // {} -> truthy
              return !user

              // if(user === null) {
              //   return true
              // }
              // return false
            })
            .catch(() => false)
        },
        message: 'El correo está en uso'
      }
    ]
  },
  age: {
    type: Number,
    required: true,
    // min: [18, 'Solo para mayores'],
    // max: 20,
  },
  working: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
})

const User = model('User', userSchema)

module.exports = User;
