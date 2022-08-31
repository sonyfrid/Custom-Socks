const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Socks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Combinations }) {
      // define association here
      this.hasMany(Combinations, { foreignKey: 'socks_id' });
    }
  }
  Socks.init({
    color: DataTypes.TEXT,
    hex: DataTypes.TEXT,
    image_url: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Socks',
  });
  return Socks;
};
