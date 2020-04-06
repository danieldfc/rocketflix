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
      miniatura_id: file.id,
      owner_id: user.id,
    });

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(video);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be create new video with title already exist', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const video = await factory.attrs('Video', {
      miniatura_id: file.id,
      owner_id: user.id,
    });

    await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(video);

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(video);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: {
        message: 'Title already exist',
      },
    });
  });

  it('should not be able validate without fields', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: expect.objectContaining({
        message: 'Validation failure',
      }),
    });
  });
});

describe('Video Index', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able list videos', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const video = await factory.create('Video', {
      owner_id: user.id,
      miniatura_id: file.id,
    });

    const response = await request(app)
      .get('/videos')
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.body[0].id).toEqual(video.id);
  });
});

describe('Video update', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able update video from user with title difference', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const video = await factory.create('Video', {
      title: 'title 1',
      owner_id: user.id,
      miniatura_id: file.id,
    });

    const updateVideo = await factory.attrs('Video', {
      title: 'title 2',
      owner_id: user.id,
      miniatura_id: file.id,
    });

    const response = await request(app)
      .put(`/videos/${video.id}`)
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(updateVideo);

    expect(response.status).toBe(200);
  });

  it('should be able update video from user', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const video = await factory.create('Video', {
      owner_id: user.id,
      miniatura_id: file.id,
    });

    const updateVideo = await factory.attrs('Video', {
      owner_id: user.id,
      miniatura_id: file.id,
    });

    const response = await request(app)
      .put(`/videos/${video.id}`)
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(updateVideo);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able update video from user without found', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const updateVideo = await factory.attrs('Video', {
      miniatura_id: file.id,
    });

    const response = await request(app)
      .put('/videos/1')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(updateVideo);

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: expect.objectContaining({
        message: expect.stringContaining('Video not found'),
      }),
    });
  });

  it('should not be able update video informed file without found', async () => {
    const user = await factory.create('User');
    const updateVideo = await factory.attrs('Video', {
      miniatura_id: 1,
    });

    const response = await request(app)
      .put('/videos/1')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send(updateVideo);

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: expect.objectContaining({
        message: expect.stringContaining('File not found'),
      }),
    });
  });

  it('should not be able update video from user with your title already exist', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');
    const video_one = await factory.create('Video', {
      title: 'Video 1',
      miniatura_id: file.id,
      owner_id: user.id,
    });
    const video_two = await factory.create('Video', {
      title: 'Video 2',
      miniatura_id: file.id,
      owner_id: user.id,
    });

    const updateVideo = await factory.attrs('Video', {
      title: video_one.title,
      miniatura_id: file.id,
      owner_id: user.id,
    });

    const response = await request(app)
      .put(`/videos/${video_two.id}`)
      .set(`Authorization`, `Bearer ${user.generateToken()}`)
      .send(updateVideo);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: expect.objectContaining({
        message: expect.stringContaining(
          'You are already using this video title'
        ),
      }),
    });
  });
});

describe('Video delete', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able delete video', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');

    const video = await factory.create('Video', {
      miniatura_id: file.id,
      owner_id: user.id,
    });

    const response = await request(app)
      .delete(`/videos/${video.id}`)
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it('should not be able delete without video', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .delete('/videos/1')
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: expect.objectContaining({
        message: expect.stringContaining('Video not found'),
      }),
    });
  });
});
