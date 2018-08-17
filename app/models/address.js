module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    county: DataTypes.STRING,
    street: DataTypes.STRING,
    houseNumber: DataTypes.STRING,
    floor: DataTypes.STRING,
    door: DataTypes.STRING
  }, {});
  Address.associate = function (models) {
    Address.hasMany(models.User, { foreignKey: 'userId' });
    Address.hasMany(models.Order, { foreignKey: 'billingAddressId' });
    Address.hasMany(models.Order, { foreignKey: 'deliveryAddressId' });
  };
  return Address;
};
