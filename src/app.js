import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
import path from 'path'
import multer from 'multer'
import postRouter from './posts/posts.router.js';

dotenv.config()

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);
app.use('/static',express.static('public-static'))
app.use('/post', postRouter)
// app.use('/users', usersRouterF);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));