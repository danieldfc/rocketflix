import File from '../models/File';

export default async (req, res, next) => {
  const { miniatura_id: id } = req.body;

  const checkFile = await File.findByPk(id);

  if (!checkFile) {
    const { originalname: name, filename: path } = req.file;

    await File.create({
      name,
      path,
    });
  }

  return next();
};
