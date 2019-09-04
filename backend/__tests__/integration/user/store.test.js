import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../../../src/app';

import factory from '../../factories';
import truncate from '../../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

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

    expect(response.status).toBe(400);
  });

  it('should be able encrypt password with new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should be able encrypt password with new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123123', user.password_hash);

    expect(compareHash).toBe(false);
  });

  it('should not be able schema validate without name', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/users')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(400);
  });

  it('should not be able schema validate without email', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/users')
      .send({
        name: user.name,
        password: user.password,
      });

    expect(response.status).toBe(400);
  });

  it('should not be able schema validate without password', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/users')
      .send({
        name: user.name,
        email: user.email,
      });

    expect(response.status).toBe(400);
  });
});
