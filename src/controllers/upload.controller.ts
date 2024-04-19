import { Request, Response, NextFunction } from 'express';
import { Photo } from '../models/photo.model';
import upload from '../middlewares/upload.middleware';

const uploadController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        upload(req, res, async (err) => {
            console.log(req);
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            try {
                const photo = new Photo({
                    title: req.body.title,
                    path: req.file?.filename,
                });
                await photo.save();
                res.redirect('/');
            } catch (err) {
                console.error(err);
                next(err);
            }
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};

export default uploadController;
