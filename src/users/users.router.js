import express from 'express';
import { getUserInfo } from './users.controller.js';
import { removeUser } from './users.controller.js';
import { updateInfor } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    
router.route('/crud')
    .delete(removeUser)
    .patch(updateInfor)
    // .post(addInfo)


export default router;