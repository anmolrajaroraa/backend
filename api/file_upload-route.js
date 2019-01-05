const express = require("express");
const router = express.Router();
const upload = require("./file_upload");

const singleUpload = upload.fields([
    {
        name: "abcd", maxCount: 1
    },
    {
        name: "xyz", maxCount: 1
    }
]);

router.post('/image-upload', function(req,res){
    singleUpload(req, res, function(err, some){
        if(err){
            return res.status(422).send({errors: [{title : "Image upload error"}, {detail: err.message}]});
        }
        return res.json({'imageUrl': req.files});
    });
})

module.exports = router;
