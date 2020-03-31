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
    const video = await factory.attrs('Video');

    const token = user.generateToken();

    const {
      body: { id: miniatura_id },
    } = await request(app)
      .post('/files')
      .set('Authorization', `Bearer ${token}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    const { title, url, description } = video;

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title,
        description,
        miniatura_id,
        url,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be create new video with title already exist', async () => {
    const user = await factory.create('User');
    const video = await factory.attrs('Video');

    const token = user.generateToken();

    const {
      body: { id: miniatura_id },
    } = await request(app)
      .post('/files')
      .set('Authorization', `Bearer ${token}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    const { title, url, description } = video;

    await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title,
        url,
        description,
        miniatura_id,
      });

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title,
        url,
        description,
        miniatura_id,
      });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: {
        message: 'Title already exist',
      },
    });
  });

  it('should not be able validate without fields', async () => {
    const user = await factory.create('User');

    const token = user.generateToken();

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        message: 'Validation failure',
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

describe('Video Index', () => {
  it('should be able list vides', async () => {
    const user = await factory.create('User');
    const video = await factory.attrs('Video');

    const token = user.generateToken();

    const {
      body: { id: miniatura_id },
    } = await request(app)
      .post('/files')
      .set('Authorization', `Bearer ${token}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    const { title, url, description } = video;

    const {
      body: { id },
    } = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title,
        description,
        miniatura_id,
        url,
      });

    const response = await request(app)
      .get('/videos')
      .set('Authorization', `Bearer ${token}`);

    expect(response.body[0].id).toEqual(id);
  });
});
