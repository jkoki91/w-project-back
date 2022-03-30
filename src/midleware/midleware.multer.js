import multer from 'multer'

const storageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public-static')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname )//nombre de usuario
        //file.fieldname +'.jpg'
        // file.originalname 
        // req.body
        // console.log(req.body.fileTitle,'prueba')
    }
})

export const uploadMiddleware = multer({ storage:storageEngine });

 