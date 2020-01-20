import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('User session', () => {
  beforeEach(async () => {
    await truncate();
  });

  xit('should be able JWT token for sessions of user', async () => {
    const user = await factory.attrs('User', {
      password: '123456',
    });

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  xit('should not be able JWT token for sessions of user without data', async () => {
    const response = await request(app).post('/sessions');

    expect(response.status).toBe(403);
  });

  xit('should be able not permited created session with user not found', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'test@test.com',
        password: '123456',
      });

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: { message: 'User not found' },
    });
  });

  xit('should be able not permited created session with password invalid', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123',
      });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: { message: 'Password does not match' },
    });
  });
});
