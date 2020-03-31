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
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(videos);
  }

  async store(req, res) {
    const { title, miniatura_id } = req.body;

    const checkTitle = await Video.findOne({ where: { title } });

    if (checkTitle) {
      return res
        .status(400)
        .json({ error: { message: 'Title already exist' } });
    }

    const { id } = await Video.create({
      ...req.body,
      owner_id: req.userId,
      miniatura_id: Number(miniatura_id),
    });

    const { description, url, user, file } = await Video.findByPk(id, {
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'name', 'url', 'path'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json({
      id,
      title,
      description,
      url,
      user,
      file,
    });
  }
}

export default new VideoController();
