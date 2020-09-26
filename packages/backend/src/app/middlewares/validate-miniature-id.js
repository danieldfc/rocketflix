import File from '../models/File';

export default async (req, res, next) => {
  const { miniatura_id } = req.body;

  if (miniatura_id) {
    const checkFile = await File.findByPk(miniatura_id);

    if (!checkFile) {
      return res.status(404).json({ error: { message: 'File not found' } });
    }
  }

  return next();
};
