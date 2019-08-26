import { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
