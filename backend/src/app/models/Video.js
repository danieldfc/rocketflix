import { Model, DataTypes } from 'sequelize';

export default class Video extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        url: DataTypes.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'owner_id', as: 'user' });
    this.belongsTo(models.File, { foreignKey: 'miniatura_id', as: 'file' });
  }
}