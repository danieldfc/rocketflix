import { object, string } from 'yup';

export default async (req, res, next) => {
  try {
    const schema = object().shape({
      name: string().required(),
      email: string()
        .email()
        .required(),
      password: string()
        .min(6)
        .required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res.status(403).json({
      error: {
        message: 'Validation failure',
      },
    });
  }
};
