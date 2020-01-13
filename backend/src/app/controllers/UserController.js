import File from '../models/File';
import User from '../models/User';

import Queue from '../../lib/Queue';

import WelcomeMail from '../jobs/WelcomeMail';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res
        .status(400)
        .json({ error: { message: 'User already exists' } });
    }

    const { id, name, provider } = await User.create(req.body);

    await Queue.add(WelcomeMail.key, {
      name,
      email,
    });

    return res.status(200).json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ wherer: { email } });

      if (userExists) {
        return res
          .status(401)
          .json({ error: { message: 'User already exists' } });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res
        .status(401)
        .json({ error: { message: 'Password does not match' } });
    }

    await user.update(req.body);

    const { id, name, provider, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      provider,
      avatar,
    });
  }
}

export default new UserController();
