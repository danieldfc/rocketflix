import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('Video store', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create new video from user', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const video = await factory.attrs('Video', {
      owner_id: user.id,
      miniatura_id: file.id,
    });

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(video);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should be able to create a new video from user without miniatura_id, but with file', async () => {
    const user = await factory.create('User');
    const video = await factory.attrs('Video', {
      owner_id: user.id,
      miniatura_id: 1,
    });

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .field('title', `${video.title}`)
      .field('description', `${video.description}`)
      .attach('file', '__tests__/fixtures/profile.png', {
        filename: 'avatar',
        contentType: 'application/x-www-form-urlencoded',
      });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  xit('should not be able with verify of duplicated email', async () => {
    await factory.create('User', {
      email: 'daniel@test.com',
    });

    const user = await factory.create('User', {
      email: 'daniel2@test.com',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        email: 'daniel@test.com',
        oldPassword: user.password,
        password: '123123',
        confirmPassword: '123123',
      });

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'User already exists' },
    });
  });

  xit('should not be able with oldPassword invalid', async () => {
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
    const user = await factory.create('User');

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(403);
  });

  it('should not be able permited invalid token JWT', async () => {
    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer 123`);

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Token invalid' },
    });
  });

  it('should not be able permited without token JWT', async () => {
    const response = await request(app).post('/videos');

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Token not found' },
    });
  });
});
