import express from 'express';
import { getUserInfo } from './users.controller.js';
import { removeUser } from './users.controller.js';
import { uploadMiddleware } from '../midleware/midleware.multer.js';
import { updateEmailCtrl, updateNameCtrl, updateUserNameCtrl, updateAgeCtrl } from './users.controller.js';
import { updateImageCtrl } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)

router.route('/crud')
    .delete(removeUser)
// .post(addInfo)

router.route('/email/:id')
    .patch(updateEmailCtrl)

router.route('/name/:id')
    .patch(updateNameCtrl)

router.route('/username/:id')
    .patch(updateUserNameCtrl)

router.route('/age/:id')
    .patch(updateAgeCtrl)

router.route('/upload')
    .post(uploadMiddleware.single("file"), updateImageCtrl)  

// router.route('/upload')
//     .post(uploadMiddleware.single("file"),(req,res)=>{
//         console.log(req.file)
//         res.send('Enviado')
//     })  

export default router;