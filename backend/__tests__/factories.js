import factory from 'factory-girl';
import faker from 'faker';

import File from '../src/app/models/File';
import User from '../src/app/models/User';
import Video from '../src/app/models/Video';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define('Video', Video, {
  title: faker.name.title(),
  url: faker.internet.url(),
  description: faker.lorem.word(),
  owner_id: faker.random.number(),
  miniatura_id: faker.random.number(),
});

factory.define('File', File, {
  name: faker.name.title(),
  path: '3fecd270a8d88febbe574d6dd525a47d.png',
});

export default factory;
