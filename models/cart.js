const Sequelize = require("sequelize");

const sequelize = require("../util/database");

// Cria carrinho, que possui apenas o id.
// Relação entre carrinhos e produtos será
// implementada em classe CartItem.

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Cart;
