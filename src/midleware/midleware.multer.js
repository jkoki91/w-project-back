import multer from 'multer'

const storageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public-static')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())//nombre de usuario
    }
})

export const uploadMiddleware = multer({ storage:storageEngine });

