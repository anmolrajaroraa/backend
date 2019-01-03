const multer=require('multer');
const path=require('path');

var files={
     policeVerification:false,
     adharCard:false,
     gST:false,
     nomineePhoto:false,
     panCardPhoto:false,

};

const storage = multer.diskStorage({
    destination:'./uploads/',
    filename:function(req,file,cb){
      files.fieldname=true;
        cb(null,file.fieldname +' '+req.body.mobile_no+ path.extname(file.originalname));

    }
})
function checkFileType(file,cb){
  const filetypes =/jpeg|png|jpg|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if(extname && mimetype){
      return cb(null,true)
  }else{
      return cb('error message');
  }
  }


  const upload = multer({
  storage:storage,
 limits:{fileSize:1000000},
  fileFilter:function(res,file,cb){
      checkFileType(file,cb)
  }
}).fields([
{
  name:'policeVerification'
},
{
  name:'adharCard'
},
{
  name:'gST'
},
{
  name:'nomineePhoto'
},{
  name:'panCardPhoto'
},
]);

/*const storage= multerS3({
      s3: s3,
      bucket: 'some-bucket',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname +' '+req.body.mobile_no+ path.extname(file.originalname)});
      },
      key: function (req, file, cb) {
        cb(null,file.fieldname +' '+req.body.mobile_no+ path.extname(file.originalname) );
      }
    })
    */
  
  
module.exports=upload;
module.exports=files;
