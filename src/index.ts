import express from 'express';
import path from "path";
import config from "./config";
import bodyParser from 'body-parser';

import indexRouter from './routes/index.route';
import uploadRouter from './routes/upload.route';

const app = config.app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/images/uploads', express.static(path.join(__dirname, 'images', 'uploads')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/upload', uploadRouter);

config.runApp();