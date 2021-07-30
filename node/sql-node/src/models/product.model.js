'use strict'

module.exports = (sequelize, DataTypes) => {
  const productSchema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }

  const productOps = {
    timestamps: true,
  }

  const Product = sequelize.define('Product', productSchema, productOps)

  Product.associate = db => {
    db.Product.belongsTo(db.User)
    // db.Product.belongsToMany(db.User, { through: 'UserProduct' })
  }

  return Product
}
