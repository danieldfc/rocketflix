import database from '../../src/database';

export default () => {
  return Promise.all(
    Object.keys(database.connection.models).map(key => {
      return database.connection.models[key].destroy({
        truncate: true,
        cascade: true,
        force: true,
      });
    })
  );
};
