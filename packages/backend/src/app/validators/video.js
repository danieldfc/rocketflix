import { object, string, number } from 'yup';

export async function validatorVideoStore(req, res, next) {
  try {
    const schema = object().shape({
      title: string().required(),
      description: string().required(),
      miniatura_id: number().positive().integer(),
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
