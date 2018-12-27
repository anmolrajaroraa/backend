const Emp=require("../schemas/empSchema");
const Uid=require("uuid/v1");

const empCrud={

    doLogin(req,res){
        console.log(req.body.userName);
        var userName=req.body.userName;
        var password=req.body.password;
        var object={userName,password};
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
       object.gender=req.body.gender;
       object.date_of_birth=req.body.date_of_birth;
       object.typeEmployee=req.body.typeEmployee;
       object.documents[0].adhno=req.body.documents.adhno;
       object.documents[0].pancardno=req.body.documents.pancardno;
       object.documents[0].bankacno=req.body.documents.bankacno;
       object.documents[0].nominee=req.body.documents.nominee;
       console.log('req is here'); 
       console.log(object.id);

        Emp.create(object,(err)=>{
            if(err){
                res.json(err);            }
            else{
                res.json('true');
            }    
            
            });
    }

}




module.exports=empCrud;