const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require("aws-sdk");

aws.config.update({
    secretAccessKey: "check your whatsapp",
    accessKeyId: "check your whatsapp",
    region: "ap-south-1"
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "big-basket-bucket",
        acl: 'public-read-write',
        metadata: function(req, file, cb){
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb){
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;
