const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Combinations }) {
      // define association here

      this.belongsToMany(Combinations, { through: 'Orders', foreignKey: 'users_id', as: 'UserCart' });
      this.belongsToMany(Combinations, { through: 'Favorites', foreignKey: 'users_id', as: 'UserFavorite' });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
