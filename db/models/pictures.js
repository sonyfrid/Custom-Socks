const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Combinations}) {
      // define association here
      this.hasMany(Combinations, { foreignKey: 'pictures_id' });
    }
  }
  Pictures.init({
    pic_name: DataTypes.TEXT,
    pic_url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Pictures',
  });
  return Pictures;
};
