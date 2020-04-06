import { object, string } from 'yup';

export async function validatorSessionStore(req, res, next) {
  try {
    const schema = object().shape({
      email: string()
        .email()
        .required(),
      password: string().required(),
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
}
