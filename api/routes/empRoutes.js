const upload=require("../multer/uploadCode");
module.exports=function(app){
 
    var empCrud=require("../crudOperations/employee");
    app.post('/login',empCrud.doLogin);
    app.post('/register',empCrud.doRegister);
    app.post("/upload",empCrud.uploadfile); 
    
    
}