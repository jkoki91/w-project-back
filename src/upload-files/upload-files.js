


// // storage engine for multer
// export const storageEngine = multer.diskStorage ({
//     destination: './public/uploads/',
//     filename: function (req, file, callback) {
//       callback (
//         null,
//         file.fieldname + '-' + Date.now () + path.extname (file.originalname)
//       );
//     },
// });

// // file filter for multer
// const fileFilter = (req, file, callback) => {
//     let pattern = /jpg|png|svg/; // reqex
  
//     if (pattern.test (path.extname (file.originalname))) {
//       callback (null, true);
//     } else {
//       callback ('Error: not a valid file');
//     }
// };

// // initialize multer
// const upload = multer ({
//     storage: storageEngine,
//     fileFilter  
//   });

//  // routing
// app.post ('/upload', upload.single ('uploadedFile'), (req, res) => {
//     console.log(req.file)
//     res.json (req.file).status (200);
//   }); 