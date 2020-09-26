import { Op } from 'sequelize';

import File from '../models/File';
import User from '../models/User';
import Video from '../models/Video';

class VideoController {
  async index(req, res) {
    const { page = 1, title = '' } = req.query;

    const videos = await Video.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`,
        },
      },
      order: ['title'],
      attributes: ['id', 'title', 'description', 'url'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'miniature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(videos);
  }

  async store(req, res) {
    const { title } = req.body;

    const checkTitle = await Video.findOne({ where: { title } });

    if (checkTitle) {
      return res
        .status(400)
        .json({ error: { message: 'Title already exist' } });
    }

    const { id } = await Video.create({
      owner_id: req.userId,
      ...req.body,
    });

    const { description, url, owner, miniature } = await Video.findByPk(id, {
      include: [
        {
          model: File,
          as: 'miniature',
          attributes: ['id', 'name', 'url', 'path'],
        },
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json({
      id,
      title,
      description,
      url,
      owner,
      miniature,
    });
  }

  async update(req, res) {
    const { id: video_id } = req.params;
    const { title } = req.body;

    const video = await Video.findByPk(video_id);

    if (!video) {
      return res.status(404).json({ error: { message: 'Video not found' } });
    }

    if (title && title !== video.title) {
      const checkVideo = await Video.findOne({
        where: {
          title,
          owner_id: req.userId,
        },
      });

      if (checkVideo) {
        return res.status(400).json({
          error: { message: 'You are already using this video title' },
        });
      }
    }

    await video.update(req.body);

    const { id, description, url, owner, miniature } = await Video.findByPk(
      video_id,
      {
        include: [
          {
            model: User,
            as: 'owner',
            attributes: ['id', 'name', 'email'],
          },
          {
            model: File,
            as: 'miniature',
            attributes: ['id', 'name', 'url', 'path'],
          },
        ],
      },
    );

    return res.json({
      id,
      description,
      url,
      owner,
      miniature,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const video = await Video.findByPk(id);

    if (!video) {
      return res.status(404).json({ error: { message: 'Video not found' } });
    }

    await video.destroy();

    return res.send();
  }
}

export default new VideoController();
