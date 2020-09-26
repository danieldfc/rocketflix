import { object, string, ref } from 'yup';

export async function validatorUserStore(req, res, next) {
  try {
    const schema = object().shape({
      name: string().required(),
      email: string().email().required(),
      password: string().min(6).required(),
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

export async function validatorUserUpdate(req, res, next) {
  try {
    const schema = object().shape({
      name: string(),
      email: string().email(),
      oldPassword: string().min(6),
      password: string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field,
        ),
      confirmPassword: string().when('password', (password, field) =>
        password ? field.required().oneOf([ref('password')]) : field,
      ),
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
