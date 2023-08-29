const multer = require('multer');

const storage = multer.diskStorage({
    destination: '../../public/uploads',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});

const upload = multer({ storage });

export default upload;