import File from '../models/File';

export default async (req, res, next) => {
  const { miniatura_id } = req.body;

  if (miniatura_id) {
    const checkFile = await File.findOne({
      where: {
        id: miniatura_id,
      },
    });

    if (!checkFile) {
      const { originalname: name, filename: path } = req.file;

      await File.create({
        name,
        path,
      });
    }
  }

  return next();
};
