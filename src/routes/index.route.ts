import { Router } from 'express';
import { Photo } from '../models/photo.model';
import multer from 'multer';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const photos = await Photo.find();
        res.render('index', { photos });
    } catch (err) {
        console.error(err);
        next(err)
    }
})


export default router;