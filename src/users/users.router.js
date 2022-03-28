import express from 'express';
import { getUserInfo } from './users.controller.js';
import { removeUser } from './users.controller.js';
import { uploadMiddleware } from '../midleware/midleware.multer.js';
import { updateNameCtrl, updateUserNameCtrl, updateAgeCtrl } from './users.controller.js';
import { updateImageCtrl, updateFollowCtrl, updateFollowersCtrl } from './users.controller.js';
import { getUsers } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)

router.route('/users/:id')
    .get(getUsers)

router.route('/crud')
    .delete(removeUser)

router.route('/name/:id')
    .patch(updateNameCtrl)

router.route('/username/:id')
    .patch(updateUserNameCtrl)

router.route('/age/:id')
    .patch(updateAgeCtrl)

router.route('/follow/:id')
    .patch(updateFollowCtrl)

router.route('/followers/:id')
    .patch(updateFollowersCtrl)

router.route('/upload/:id')
    .patch(uploadMiddleware.single("file"), updateImageCtrl)


export default router;