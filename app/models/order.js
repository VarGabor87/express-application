module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    billingAddressId: DataTypes.INTEGER,
    deliveryAddressId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['ordered', 'delivered', 'deleted'],
      defaultValue: 'ordered'
    }
  }, {});
  Order.associate = function (models) {
    Order.hasMany(models.OrderLine, { foreignKey: 'orderId' });
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.belongsTo(models.Address, { foreignKey: 'billingAddressId' });
    Order.belongsTo(models.Address, { foreignKey: 'deliveryAddressId' });
  };
  return Order;
};
