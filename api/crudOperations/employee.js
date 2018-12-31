const Emp=require("../schemas/empSchema");
const Uid=require("uuid/v1");
const fs=require("fs");
const path=require("path");
const upload=require("../multer/uploadCode");
const multer=require("multer");



// console.log(path.join(__dirname,'../../docUploads/policeVerification'));
// console.log(__dirname);

const empCrud={

    doLogin(req,res){
        console.log(req.body.name);
        var name=req.body.name;
        var gender=req.body.gender;
        var object={name,gender};
        console.log('came here later');
        Emp.findOne(object,(err,data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    },

    doRegister(req,res){
       /* var userName=req.body.userName;
        //var password=req.body.password;
        var object={userName};
        console.log(req.body);*/        
       var object=require("../setterGetter/empSetGet");

       object.id=Uid();
       object.name=req.body.name;
       object.password=req.body.password;
       object.address[0].fulladdress=req.body.address.fulladdress;
       object.address[0].street=req.body.address.street;
       object.address[0].city=req.body.address.city;
       object.address[0].state=req.body.address.state;
       object.address[0].pin_code=req.body.address.pin_code;
       object.email=req.body.email;
       object.mobile_no=req.body.mobile_no;
       object.qualification=req.body.qualification;
       object.referralCode=req.body.refferalCode;
       object.gender=req.body.gender;
       object.date_of_birth=req.body.date_of_birth;          //filling data into object to be given to db
       object.typeEmployee=req.body.typeEmployee;
       object.documents[0].adhno=req.body.documents.adhno;
       object.documents[0].pancardno=req.body.documents.pancardno;
       object.documents[0].bankacno=req.body.documents.bankacno;
       object.documents[0].nominee=req.body.documents.nominee;
       console.log(req.body.date_of_birth);


       /*var img1path=path.join(__dirname,'../../docUploads/policeVerification ')+req.body.mobile_no+'.png';
       console.log(img1path);
       object.policeVerificationImg.data=fs.readFileSync(img1path);             //file reading from disk 
       object.policeVerificationImg.contentType='image/png';

       var img2path=path.join(__dirname,'../../docUploads/panCardPhoto ')+req.body.mobile_no+'.png';
       object.panCardPhoto.data=fs.readFileSync(img2path);
       object.panCardPhoto.contentType='image/png';
       if(object.panCardPhoto.data==null||object.policeVerificationImg==null){    //checking if files exist on disk or not
           var error="File not uploaded";
       }*/


       console.log('req is here'); 
       console.log(object.id);
        //method to create objeccts in db
        Emp.create(object,(err)=>{
            /*if(error!=null){   //file exist validation
                res.json(error);
            }*/
            if(err){
                res.json(err);            }   //error while uploading data to db
            else{
                res.json('true');
            }    
            
            });
    },


   // uploadFile()

   uploadfile(req,res){
    upload[0](req,res,function(err){
        if(err instanceof multer.MulterError){
            console.log(err);
        }else if(err){
            //console.log(req.file)
            res.json(err);

            
        }
        console.log("trying to upload file");
        res.json(upload[1]);

 
    })

    }  

}




module.exports=empCrud;