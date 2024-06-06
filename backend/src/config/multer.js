import multer, { diskStorage } from "multer";
import { extname } from "path";

const upload = multer({
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + extname(file.originalname));
    },
  }),
});

export default upload;
