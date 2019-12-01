import request from 'supertest';

import app from '../../../src/app';

import truncate from '../../util/truncate';
import factory from '../../factories';

describe('User session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able JWT token for sessions of user', async () => {
    await factory.create('User', {
      email: 'test@test.com',
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'test@test.com',
        password: '123456',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not be able JWT token for sessions of user without data', async () => {
    const response = await request(app).post('/sessions');

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Validation failure' },
    });
  });

  it('should be able not permited created session with user not found', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'test@test.com',
        password: '123456',
      });

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'User not found' },
    });
  });

  it('should be able not permited created session with password invalid', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123',
      });

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Password does not match' },
    });
  });
});
