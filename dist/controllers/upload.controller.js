"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const photo_model_1 = require("../models/photo.model");
const upload_middleware_1 = __importDefault(require("../middlewares/upload.middleware"));
const uploadController = async (req, res, next) => {
    try {
        (0, upload_middleware_1.default)(req, res, async (err) => {
            console.log(req);
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            try {
                const photo = new photo_model_1.Photo({
                    title: req.body.title,
                    path: req.file?.filename,
                });
                await photo.save();
                res.redirect('/');
            }
            catch (err) {
                console.error(err);
                next(err);
            }
        });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
};
exports.default = uploadController;
