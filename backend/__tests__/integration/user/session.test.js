import request from 'supertest';
import app from '../../../src/app';

import factory from '../../factories';
import truncate from '../../util/truncate';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to session', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.body).toHaveProperty('token');
  });

  it('should be able to session without email', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send({
        password: user.password,
      });

    expect(response.status).toBe(400);
  });

  it('should be able to session without password', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
      });

    expect(response.status).toBe(400);
  });

  it('should be able to session without campos', async () => {
    await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send();

    expect(response.status).toBe(400);
  });

  it('should be able to session without email validated', async () => {
    const user = await factory.attrs('User', {
      email: 'daniel@test.com',
    });

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'daniel1@test.com',
        password: user.password,
      });

    expect(response.status).toBe(400);
  });

  it('should be able to session without password validated', async () => {
    const user = await factory.attrs('User', {
      email: 'daniel@test.com',
      password: '123456',
    });

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123',
      });

    expect(response.status).toBe(401);
  });
});
