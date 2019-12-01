import request from 'supertest';

import app from '../../../src/app';

import factory from '../../factories';
import truncate from '../../util/truncate';

describe('User store', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'User already exists' },
    });
  });

  it('should not be able schema validate without fields', async () => {
    const response = await request(app).post('/users');

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Validation failure' },
    });
  });
});
