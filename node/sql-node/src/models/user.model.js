module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Jane Doe'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  }

  const userOps = {
    timestamps: true,
    tableName: 'users',
  }

  const User = sequelize.define('User', userSchema, userOps)

  User.associate = db => {
    db.User.hasOne(db.Product)
    // db.User.hasMany(db.Product)
    // db.User.belongToMany(db.Product, { through: 'UserProduct' })
    // db.User.hasMany(db.Posts)
    // db.User.hasOne(db.Profile)
  }

  return User
}
