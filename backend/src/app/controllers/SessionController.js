import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: { message: 'User not found' } });
    }

    if (!(await user.checkPassword(password))) {
      return res
        .status(401)
        .json({ error: { message: 'Password does not match' } });
    }

    const { id, name, provider } = user;

    return res.status(200).json({
      user: {
        id,
        name,
        email,
        provider,
      },
      token: user.generateToken(),
    });
  }
}

export default new SessionController();
