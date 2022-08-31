const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Prints extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Combinations}) {
      // define association here
      this.hasMany(Combinations, { foreignKey: 'prints_id' });
    }
  }
  Prints.init({
    prints_name: DataTypes.TEXT,
    prints_url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Prints',
  });
  return Prints;
};
