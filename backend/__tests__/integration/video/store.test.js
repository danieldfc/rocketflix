import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('Video store', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create new video from user without field miniatura_id', async () => {
    const user = await factory.create('User');
    const video = await factory.attrs('Video');

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png')
      .field('title', `${video.title}`)
      .field('description', `${video.description}`)
      .field('url', `${video.url}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be create new video with title already exist', async () => {
    const user = await factory.create('User');
    const video = await factory.attrs('Video');

    await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png')
      .field('title', `${video.title}`)
      .field('description', `${video.description}`)
      .field('url', `${video.url}`);

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png')
      .field('title', `${video.title}`)
      .field('description', `${video.description}`)
      .field('url', `${video.url}`);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: {
        message: 'Title already exist',
      },
    });
  });

  it('should be able to create new video from user with field miniatura_id', async () => {
    const user = await factory.create('User');

    const {
      body: { id },
    } = await request(app)
      .post('/files')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    const video = await factory.attrs('Video', {
      miniatura_id: id,
    });

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png')
      .field('title', `${video.title}`)
      .field('description', `${video.description}`)
      .field('url', `${video.url}`)
      .field('miniatura_id', `${video.miniatura_id}`);

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able validate without fields', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        title: 'Validation failure',
        message: expect.arrayContaining([
          expect.stringContaining('title is a required field'),
          expect.stringContaining('description is a required field'),
        ]),
      }),
    });
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
