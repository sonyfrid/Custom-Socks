const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Combinations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Users, Socks, Prints, Pictures, Orders,
    }) {
      // this.hasMany(Orders, { foreignKey: 'combinations_id' });
      // // // define association here
      this.belongsToMany(Users, { through: 'Orders', foreignKey: 'combinations_id', as: 'UserCart' });
      this.belongsToMany(Users, { through: 'Favorites', foreignKey: 'combinations_id', as: 'UserFavorite' });

      this.belongsTo(Prints, { foreignKey: 'prints_id' });
      this.belongsTo(Pictures, { foreignKey: 'pictures_id' });
      this.belongsTo(Socks, { foreignKey: 'socks_id' });
    }
  }
  Combinations.init({
    socks_id: DataTypes.INTEGER,
    pictures_id: DataTypes.INTEGER,
    prints_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Combinations',
  });
  return Combinations;
};
