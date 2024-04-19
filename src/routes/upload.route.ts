import express from 'express';
import uploadController from '../controllers/upload.controller';

const router = express.Router();

router.post('/', uploadController);

export default router;
