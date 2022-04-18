import express from 'express';
import { updatePostsCtrl, getPostsCtrlId, getPostsInfoCtrl } from './posts.controller.js';
import { uploadMiddleware } from '../midleware/midleware.multer.js';

const postRouter = express.Router();

// postRouter.route('/')
//     .get(getUserInfo)

postRouter.route('/posts/:id')
    .patch(uploadMiddleware.single("file"),updatePostsCtrl)

postRouter.route('/follow/:id')
    .get(getPostsCtrlId)

postRouter.route('/email/:id')
    .get(getPostsInfoCtrl)

// postRouter.route('/upload/:id')
//     .patch(uploadMiddleware.single("file"), updateImageCtrl)


export default postRouter;