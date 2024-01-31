const path = require("path");
const multer = require("multer");
const FILE_MIME = require("../constants/file-constant");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../my-uploads"));
  },
  filename: function (req, file, cb) {
    const fileMime = FILE_MIME[file.mimetype];
    cb(null, file.fieldname + "-" + Date.now() + fileMime);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
