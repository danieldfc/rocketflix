import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('Session store', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able JWT token for sessions of user', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not be able JWT token for sessions of user without data', async () => {
    const response = await request(app).post('/sessions');

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        message: expect.stringContaining('Validation failure'),
      }),
    });
  });

  it('should be able not permited created session with user not found', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'test@test.com',
        password: '123456',
      });

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: { message: expect.stringContaining('User not found') },
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

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: { message: expect.stringContaining('Password does not match') },
    });
  });
});
