import request from 'supertest';

import app from '../../../src/app';

import truncate from '../../util/truncate';
import factory from '../../factories';

describe('File store', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to created file', async () => {
    const user = await factory.create('User');

    const {
      body: { token },
    } = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password,
      });

    const response = await request(app)
      .post('/files')
      .set('Authorization', `Bearer ${token}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    expect(response.body).toHaveProperty('id');
  });
});
