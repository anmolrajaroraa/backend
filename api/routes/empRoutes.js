const upload = require('../multer/uploadCode')
module.exports=function(app){

    var empCrud=require("../crudOperations/employee");
    app.post('/login',empCrud.doLogin);
    app.post('/register',empCrud.doRegister);
     app.post("/upload",(res,req)=>{
       upload(req,res,(err)=>{
           if(err){
               console.log(err);
           }else{
               console.log(req.file)
           }
    
       })
    
       }  
    )
    
}