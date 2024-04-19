"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_model_1 = require("../models/photo.model");
const router = (0, express_1.Router)();
router.get('/', async (req, res, next) => {
    try {
        const photos = await photo_model_1.Photo.find();
        res.render('index', { photos });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
exports.default = router;
