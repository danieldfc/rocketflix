import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('User update', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to update all fields', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        email: user.email,
        oldPassword: user.password,
        password: '123123',
        confirmPassword: '123123',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should be able to update, but without oldPassword', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        name: 'teste',
        email: user.email,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able with verify of duplicated email', async () => {
    const userOne = await factory.create('User', {
      email: 'daniel@test.com',
    });

    const userTwo = await factory.create('User', {
      email: 'daniel2@test.com',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${userTwo.generateToken()}`)
      .send({
        email: userOne.email,
        oldPassword: userTwo.password,
        password: '123123',
        confirmPassword: '123123',
      });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        message: expect.stringContaining('User already exists'),
      }),
    });
  });

  it('should not be able with oldPassword invalid', async () => {
    const user = await factory.create('User', {
      email: 'test@test.com',
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        name: user.name,
        email: 'test@test.com',
        oldPassword: '1234567',
        password: '123123',
        confirmPassword: '123123',
      });

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Password does not match' },
    });
  });

  it('should not be able validate without fields', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        email: user.email,
        oldPassword: '123456',
        password: '',
        confirmPassword: '',
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        title: 'Validation failure',
        message: expect.arrayContaining([
          expect.stringContaining('password is a required field'),
        ]),
      }),
    });
  });

  it('should not be able validate with confirmPassword empty', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        email: user.email,
        oldPassword: '123456',
        password: '123123',
        confirmPassword: '',
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        title: 'Validation failure',
        message: expect.arrayContaining([
          expect.stringContaining(
            'confirmPassword must be one of the following values: Ref(password)'
          ),
        ]),
      }),
    });
  });

  it('should not be able validate without field confirmPassword', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        email: user.email,
        oldPassword: '123456',
        password: '123123',
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        title: 'Validation failure',
        message: expect.arrayContaining([
          expect.stringContaining('confirmPassword is a required field'),
        ]),
      }),
    });
  });

  it('should not be able permited invalid token JWT', async () => {
    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer 123`);

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Token invalid' },
    });
  });

  it('should not be able permited without token JWT', async () => {
    const response = await request(app).put('/users');

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Token not found' },
    });
  });
});
