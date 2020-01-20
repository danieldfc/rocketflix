import Sequelize, { Model } from 'sequelize';

class Video extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        url: Sequelize.STRING,
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

export default Video;
